import React, { useState } from "react";
import "../component/css/childdetails.css";
import "../component/css/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, submitFormData } from "../redux/actions";
import "../component/css/parentdetails.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Parentdetails({ Back, Forward }) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");

    const handleOnChange = (value, country) => {
        setPhoneNumber(value);
        setCountryCode(country.dialCode);
    };
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formData);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(updateFormData({ [name]: value }));
    };

    const [motherFirstName, setMotherFirstName] = useState("");
    const [motherLastName, setMotherLastName] = useState("");
    const [motherMobileNumber, setMotherMobileNumber] = useState("");
    const [motherEmail, setMotherEmail] = useState("");
    const [fatherFirstName, setFatherFirstName] = useState("");
    const [fatherLastName, setFatherLastName] = useState("");
    const [fatherMobileNumber, setFatherMobileNumber] = useState("");
    const [fatherEmail, setFatherEmail] = useState("");
    const [errors, setErrors] = useState({});

    const handleMotherFirstNameChange = (event) => {
        const inputValue = event.target.value;
        setMotherFirstName(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherFirstName: "Please enter mother's first name.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, motherFirstName: "" }));
        }
    };

    const handleMotherFirstNameBlur = () => {
        if (motherFirstName.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherFirstName: "Please enter mother's first name.",
            }));
        }
    };

    const handleMotherLastNameChange = (event) => {
        const inputValue = event.target.value;
        setMotherLastName(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherLastName: "Please enter mother's last name.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, motherLastName: "" }));
        }
    };

    const handleMotherLastNameBlur = () => {
        if (motherLastName.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherLastName: "Please enter mother's last name.",
            }));
        }
    };

    const handleMotherMobileNumberChange = (event) => {
        const inputValue = event.target.value;
        setMotherMobileNumber(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherMobileNumber: "Please enter mother's mobile number.",
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherMobileNumber: "",
            }));
        }
    };

    const handleMotherMobileNumberBlur = () => {
        if (motherMobileNumber.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherMobileNumber: "Please enter mother's mobile number.",
            }));
        }
    };

    const handleMotherEmailChange = (event) => {
        const inputValue = event.target.value;
        setMotherEmail(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherEmail: "Please enter mother's email.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, motherEmail: "" }));
        }
    };

    const handleMotherEmailBlur = () => {
        if (motherEmail.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                motherEmail: "Please enter mother's email.",
            }));
        }
    };

    const handleFatherFirstNameChange = (event) => {
        const inputValue = event.target.value;
        setFatherFirstName(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherFirstName: "Please enter father's first name.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, fatherFirstName: "" }));
        }
    };

    const handleFatherFirstNameBlur = () => {
        if (fatherFirstName.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherFirstName: "Please enter father's first name.",
            }));
        }
    };

    const handleFatherLastNameChange = (event) => {
        const inputValue = event.target.value;
        setFatherLastName(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherLastName: "Please enter father's last name.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, fatherLastName: "" }));
        }
    };

    const handleFatherLastNameBlur = () => {
        if (fatherLastName.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherLastName: "Please enter father's last name.",
            }));
        }
    };

    const handleFatherMobileNumberChange = (event) => {
        const inputValue = event.target.value;
        setFatherMobileNumber(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherMobileNumber: "Please enter father's mobile number.",
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherMobileNumber: "",
            }));
        }
    };

    const handleFatherMobileNumberBlur = () => {
        if (fatherMobileNumber.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherMobileNumber: "Please enter father's mobile number.",
            }));
        }
    };

    const handleFatherEmailChange = (event) => {
        const inputValue = event.target.value;
        setFatherEmail(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherEmail: "Please enter father's email.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, fatherEmail: "" }));
        }
    };

    const handleFatherEmailBlur = () => {
        if (fatherEmail.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fatherEmail: "Please enter father's email.",
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};

        if (motherFirstName.trim() === "") {
            newErrors.motherFirstName = "Please enter mother's first name.";
        }

        if (motherLastName.trim() === "") {
            newErrors.motherLastName = "Please enter mother's last name.";
        }

        if (motherMobileNumber.trim() === "") {
            newErrors.motherMobileNumber =
                "Please enter mother's mobile number.";
        }

        if (motherEmail.trim() === "") {
            newErrors.motherEmail = "Please enter mother's email.";
        }

        if (fatherFirstName.trim() === "") {
            newErrors.fatherFirstName = "Please enter father's first name.";
        }

        if (fatherLastName.trim() === "") {
            newErrors.fatherLastName = "Please enter father's last name.";
        }

        if (fatherMobileNumber.trim() === "") {
            newErrors.fatherMobileNumber =
                "Please enter father's mobile number.";
        }

        if (fatherEmail.trim() === "") {
            newErrors.fatherEmail = "Please enter father's email.";
        }

        setErrors(newErrors);

        // Proceed with form submission if there are no errors
        if (Object.keys(newErrors).length === 0) {
            // Your form submission logic goes here
        }
    };

    return (
        <section className="child-main-sec">
            <div className="main-sec">
                <div className="main-head">
                    <h1 className="font-fmly font-fml">
                        <span>Child</span> Admission Form
                    </h1>
                </div>

                <div className="head-sec">
                    <div className="para-sec">
                        <h3>Add Parent Details</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                        </p>
                    </div>
                </div>

                <div className="input-main">
                    <div className="inp-tell space">
                        <input
                            type="text"
                            name="motherFirstName"
                            placeholder="Mother First Name *"
                            value={formData?.motherFirstName}
                            onBlur={handleMotherFirstNameBlur}
                            onChange={(e) => {
                                handleMotherFirstNameChange(e);
                                handleInputChange(e);
                                // console.log(e.target.value)
                            }}
                            className="input input-padding"
                        />
                        {errors.motherFirstName && (
                            <div className="error">
                                {errors.motherFirstName}
                            </div>
                        )}
                    </div>
                    <div className="inp-tell space bbb left">
                        <input
                            name="motherLastName"
                            type="text"
                            value={formData?.motherLastName}
                            placeholder="Mother Last Name *"
                            onBlur={handleMotherLastNameBlur}
                            onChange={(e) => {
                                // console.log(e.target.value)
                                handleMotherLastNameChange(e);
                                handleInputChange(e);
                                // setMotherLastName(e.target.value);
                            }}
                            className="input input-padding"
                        />
                        {errors.motherLastName && (
                            <div className="error">{errors.motherLastName}</div>
                        )}
                    </div>
                </div>

                <div className="input-main">
                    <div className="inp-tell space">
                        <PhoneInput
                            className="inputt"
                            type="number"
                            name="motherMobile"
                            value={formData?.motherMobile}
                            placeholder="Mobile Number *"
                            onBlur={handleMotherMobileNumberBlur}
                            onChange={(e) => {
                                console.log(e);
                                const event = {};
                                event.target = {
                                    value: e,
                                    name: "motherMobile",
                                };
                                handleMotherMobileNumberChange(event);
                                handleInputChange(event);
                            }}
                        />
                        {errors.motherMobileNumber && (
                            <div className="error">
                                {errors.motherMobileNumber}
                            </div>
                        )}
                    </div>

                    <div className="inp-tell bbb space left">
                        <input
                            type="email"
                            placeholder="Email Address *"
                            name="motherEmail"
                            value={formData?.motherEmail}
                            onBlur={handleMotherEmailBlur}
                            onChange={(e) => {
                                // console.log(e.target.value)
                                // setEmailaddress(e.target.value);
                                handleMotherEmailChange(e);
                                handleInputChange(e);
                            }}
                            className="input input-padding"
                        />
                        {errors.motherEmail && (
                            <div className="error">{errors.motherEmail}</div>
                        )}
                    </div>
                </div>

                <div className="input-main">
                    <div className="inp-tell space">
                        <input
                            type="text"
                            name="fatherFirstName"
                            value={formData?.fatherFirstName}
                            placeholder="Father First Name *"
                            onBlur={handleFatherFirstNameBlur}
                            onChange={(e) => {
                                // console.log(e.target.value)
                                handleFatherFirstNameChange(e);
                                handleInputChange(e);
                            }}
                            className="input input-padding"
                        />
                        {errors.fatherFirstName && (
                            <div className="error">
                                {errors.fatherFirstName}
                            </div>
                        )}
                    </div>
                    <div className="inp-tell bbb space left">
                        <input
                            type="text"
                            name="fatherLastName"
                            value={formData?.fatherLastName}
                            placeholder="Father Last Name *"
                            onBlur={handleFatherLastNameBlur}
                            onChange={(e) => {
                                // console.log(e.target.value)
                                handleFatherLastNameChange(e);
                                handleInputChange(e);
                            }}
                            className="input input-padding"
                        />
                        {errors.fatherLastName && (
                            <div className="error">{errors.fatherLastName}</div>
                        )}
                    </div>
                </div>

                <div className="input-main">
                    <div className="inp-tell space">
                        <PhoneInput
                            type="number"
                            name="fatherMobile"
                            country={countryCode}
                            value={formData?.fatherMobile}
                            placeholder="Mobile Number *"
                            onBlur={handleFatherMobileNumberBlur}
                            onChange={(e) => {
                                console.log(e);
                                const event = {};
                                event.target = {
                                    value: e,
                                    name: "fatherMobile",
                                };
                                handleFatherMobileNumberChange(event);
                                handleInputChange(event);
                            }}
                            className="inputt"
                        />
                        {errors.fatherMobileNumber && (
                            <div className="error">
                                {errors.fatherMobileNumber}
                            </div>
                        )}
                    </div>
                    <div className="inp-tell bbb space left">
                        <input
                            type="email"
                            name="fatherEmail"
                            value={formData?.fatherEmail}
                            placeholder="Email Address *"
                            onBlur={handleFatherEmailBlur}
                            onChange={(e) => {
                                // console.log(e.target.value)
                                handleFatherEmailChange(e);
                                handleInputChange(e);
                            }}
                            className="input input-padding"
                        />
                        {errors.fatherEmail && (
                            <div className="error">{errors.fatherEmail}</div>
                        )}
                    </div>
                </div>
                {/* {renderView()} */}
                <div className="btn-parent">
                    <div className="btn-p">
                        <div className="btn-pc">
                            <button className="button pdg back" onClick={Back}>
                                Back
                            </button>
                        </div>
                        <div className="btn-pc">
                            <button className="button pdg" onClick={Forward}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Parentdetails;
