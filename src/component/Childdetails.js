import { useEffect, useState } from "react";
import "../component/css/childdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, submitFormData } from "../redux/actions";
import { useNavigate } from "react-router";

function Childdetails({ Forward }) {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [currentView, setCurrentView] = useState(1);

    const handleFileSelect = () => {
        document
            .querySelector("#imageInput")
            .addEventListener("change", (ev) => {
                if (ev.target.files.length === 0) {
                    return;
                }
                const file = ev.target.files[0];
                setSelectedFile(file);
                const fileReader = new FileReader();
                fileReader.readAsBinaryString(file);
                fileReader.onload = () => {
                    const binaryStr = fileReader.result;
                    const obj = {
                        target: {
                            name: "childPhoto",
                            value: binaryStr,
                        },
                    };
                    handleInputChange(obj);
                };
            });
    };
    useEffect(() => {
        handleFileSelect();
    }, []);

    const handleFileUpload = async () => {
        document.getElementById("imageInput").click();
    };

    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formData);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(updateFormData({ [name]: value }));
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [errors, setErrors] = useState({});

    const handleFirstNameChange = (event) => {
        const inputValue = event.target.value;
        setFirstName(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                firstName: "Please enter your first name.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
        }
    };

    const handleFirstNameBlur = () => {
        if (firstName.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                firstName: "Please enter your first name.",
            }));
        }
    };

    const handleLastNameChange = (event) => {
        const inputValue = event.target.value;
        setLastName(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                lastName: "Please enter your last name.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
        }
    };

    const handleLastNameBlur = () => {
        if (lastName.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                lastName: "Please enter your last name.",
            }));
        }
    };

    const handleAgeChange = (event) => {
        const inputValue = event.target.value;
        setAge(inputValue);

        if (inputValue === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                age: "Please enter your age.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, age: "" }));
        }
    };

    const handleAgeBlur = () => {
        if (age === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                age: "Please enter your age.",
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = {};

        if (firstName.trim() === "") {
            newErrors.firstName = "Please enter your first name.";
        }

        if (lastName.trim() === "") {
            newErrors.lastName = "Please enter your last name.";
        }

        if (age === "") {
            newErrors.age = "Please enter your age.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        const formData = new FormData();
        formData.append("photo", selectedFile);

        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }

        setFirstName("");
        setLastName("");
        setAge("");
        setErrors({});
    };

    return (
        <>
            <section className="child-main-sec">
                <div className="main-sec">
                    <div className="main-head">
                        <h1 className="font-fmly font-fml">
                            <span>Child</span> Admission Form
                        </h1>
                    </div>

                    {/* head section */}
                    <div className="head-sec">
                        <div className="para-sec">
                            <h3>Add Child Details</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi
                            </p>
                        </div>
                    </div>

                    {/* photo upload section */}
                    <div className="p-uplod-sec">
                        <div className="pc-uplod crcl">
                            {selectedFile ? (
                                <img
                                    className="img-user-uploaded"
                                    src={URL.createObjectURL(selectedFile)}
                                    alt=""
                                />
                            ) : (
                                <svg
                                    width="52"
                                    className="img-user"
                                    height="65"
                                    viewBox="0 0 52 65"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_2_79)">
                                        <path
                                            d="M24.0796 65.4353C16.2668 65.4353 8.45389 65.4353 0.640911 65.4353C0.420278 65.4353 0.198134 65.4461 -0.0208788 65.428C-0.937537 65.3544 -1.43096 64.8404 -1.426 63.9224C-1.39273 57.7807 0.315851 52.1804 4.06931 47.2914C8.14071 41.9879 13.5107 38.7605 20.0929 37.7349C32.8324 35.7496 44.5725 43.1903 48.4036 55.5616C49.2078 58.1587 49.5867 60.8179 49.672 63.5276C49.7152 64.9133 49.2261 65.4345 47.8495 65.4348C39.9262 65.4366 32.0029 65.4367 24.0796 65.4353ZM24.054 62.6938H27.6941C33.8714 62.6938 40.0487 62.6859 46.226 62.7072C46.7926 62.7091 46.9045 62.5747 46.8571 62.0121C46.7337 60.5363 46.4983 59.072 46.153 57.6321C45.4614 54.7064 44.199 51.9473 42.4387 49.5145C40.6784 47.0816 38.4551 45.0232 35.8975 43.4583C33.3398 41.8934 30.4985 40.853 27.5378 40.3973C24.5772 39.9416 21.5559 40.0797 18.6487 40.8035C8.66513 43.2646 2.08232 51.9193 1.34731 61.9129C1.30011 62.5548 1.42528 62.7128 2.08167 62.7104C9.40576 62.6842 16.7296 62.6938 24.054 62.6938Z"
                                            fill="#C8C8C8"
                                        />
                                        <path
                                            d="M39.9982 17.5048C40.009 26.2898 32.9037 33.4286 24.1392 33.4392C22.0512 33.4457 19.9825 33.0376 18.0522 32.2384C16.1219 31.4393 14.3681 30.2648 12.8917 28.7826C11.4152 27.3004 10.2453 25.5397 9.44926 23.6019C8.6532 21.6641 8.2467 19.5873 8.25314 17.4912C8.26707 8.69332 15.3746 1.55747 24.1191 1.56213C32.8504 1.56701 39.9877 8.73245 39.9982 17.5048ZM24.1056 30.7386C31.3017 30.7516 37.2522 24.8338 37.2765 17.6402C37.3012 10.2967 31.4556 4.32663 24.223 4.31058C16.8872 4.29411 10.9583 10.1768 10.9356 17.494C10.9132 24.763 16.8422 30.7255 24.1056 30.7386Z"
                                            fill="#C8C8C8"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_79">
                                            <rect
                                                width="51.1006"
                                                height="63.8757"
                                                fill="white"
                                                transform="translate(0.0769272 0.810654)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            )}

                            <div className="plus-curcle pdg0">
                                <button
                                    onClick={handleFileUpload}
                                    className="plus"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleFileUpload}
                                className="button pdg back"
                            >
                                Upload Photo
                            </button>
                            <input
                                id="imageInput"
                                accept=".jpeg, .jpg, .png"
                                type="file"
                                // onChange={}
                                style={{ display: "none" }}
                            />
                        </div>
                    </div>

                    {/* name section */}

                    <div className="input-main">
                        <div className="inp-tell">
                            <input
                                className="input childFirst"
                                value={formData?.firstName}
                                onBlur={handleFirstNameBlur}
                                onChange={(e) => {
                                    // e.target.value
                                    handleFirstNameChange(e);
                                    handleInputChange(e);
                                }}
                                name="firstName"
                                type="text"
                                placeholder="Child First Name *"
                                required
                            />
                            {errors.firstName && (
                                <div className="error">{errors.firstName}</div>
                            )}
                        </div>

                        <div className="inp-tell bbb">
                            <input
                                className=" input childLast"
                                value={formData?.lastName}
                                type="text"
                                onBlur={handleLastNameBlur}
                                onChange={(e) => {
                                    handleLastNameChange(e);
                                    handleInputChange(e);
                                }}
                                name="lastName"
                                placeholder="Child Last Name *"
                            />
                            {errors.lastName && (
                                <div className="error">{errors.lastName}</div>
                            )}
                        </div>
                    </div>

                    <div className="input-main main2">
                        <div className="inp-tell">
                            <input
                                placeholder=""
                                name="dateOfBirth"
                                value={formData?.dateOfBirth}
                                type="date"
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                                className="input dob "
                            />
                        </div>
                        <div className="inp-tell bbb">
                            <input
                                name="age"
                                type="number"
                                value={formData?.age}
                                placeholder="Age *"
                                onBlur={handleAgeBlur}
                                onChange={(e) => {
                                    handleAgeChange(e);
                                    handleInputChange(e);
                                }}
                                className="input age"
                                style={{
                                    background: "rgba(200, 200, 200, 0.25)",
                                }}
                            />
                            {errors.age && (
                                <div className="error">{errors.age}</div>
                            )}
                        </div>
                        <div className="inp-tell bbb">
                            <select
                                name="gender"
                                className="input"
                                defaultValue={formData?.gender}
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                            >
                                <option disabled selected>
                                    Gender<span id="span"> *</span>
                                </option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
                            {errors.gender && (
                                <div className="error">{errors.gender}</div>
                            )}
                        </div>
                    </div>

                    <button
                        className="button pdg"
                        onClick={() => {
                            handleSubmit();
                            Forward();
                        }}
                    >
                        Continue
                    </button>
                </div>
            </section>
        </>
    );
}

export default Childdetails;
