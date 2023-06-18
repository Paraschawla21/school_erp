import React, { useState } from "react";
import "../component/css/childdetails.css";
import "../component/css/childhealthdetails.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, submitFormData } from "../redux/actions";
import { useEffect } from "react";

function ChildHealthDetails({ Back, Forward }) {
    const [currentView, setCurrentView] = useState(1);
    const [ChildWeight, setChildWeight] = useState("");
    const [ChildHeight, setChildHeight] = useState("");
    const [Allergies, setAllergies] = useState("");
    const [imagevideoAuthorization, setimagevideoAuthorization] = useState("");
    const [ExteriorTripAuthorization, setExteriorTripAuthorization] =
        useState("");
    const [siblings, setSiblings] = useState([
        { siblingName: "", siblingDOB: "" },
    ]);
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formData);

    const handleAddAllergies = (event, index) => {
        event.preventDefault();
        const temp = [...Allergies];
        // temp[index].value = event.target.value;
        temp.push({ value: "" });
        setAllergies(temp);
        dispatch({ type: "UPDATE_FORM_DATA", payload: formData });
    };
    useEffect(() => {
        if (formData) {
            const { siblings: formSib } = formData;
            if (Array.isArray(formSib)) {
                setSiblings(formSib);
            } else if (typeof formSib === "string") {
                setSiblings(JSON.parse(formSib));
            }
        }
    }, []);
    const handleAddSiblings = (event, index) => {
        event.preventDefault();
        const temp = [...siblings];
        temp.push({
            siblingName: "",
            siblingDOB: "",
        });
        setSiblings(temp);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(updateFormData({ [name]: value }));
    };
    const handleSibling = (data, i) => {
        const { value, key } = data;
        const temp = [...siblings];
        temp[i][key] = value;
        setSiblings(temp);
        const redObj = { target: { name: "siblings", value: siblings } };
        handleInputChange(redObj);
        // console.log({ redObj });
        // console.log({ formData });
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

                    <div className="head-sec">
                        <div className="para-sec">
                            <h3>Child Health Details</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi
                            </p>
                        </div>
                    </div>

                    <div className="input-main weight-height-mement">
                        <div className="inp-tell space form-flex weight-m weight">
                            <input
                                placeholder="Child Weight"
                                className="input form-flex-item-large space height"
                                type="number"
                                value={formData?.weight}
                                name="weight"
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                            />

                            <select
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                                className="input form-flex-item-small space  "
                                name="weightUnit"
                                value={formData?.weightUnit}
                            >
                                <option selected disabled>
                                    Child Weight
                                </option>
                                <option>kg</option>
                            </select>
                        </div>

                        <div className="inp-tell space form-flex weight-m space weightt">
                            <input
                                placeholder="Child Height"
                                className="input form-flex-item-large space height"
                                type="number"
                                value={formData?.height}
                                name="height"
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                            />

                            <select
                                className="input form-flex-item-small space  "
                                name="heightUnit"
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                                value={formData?.heightUnit}
                            >
                                <option selected disabled>
                                    Child Height
                                </option>
                                <option value={"cm"}>cm</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-main">
                        <div className="inp-tell space">
                            <div className="addSiblingsContainer">
                                <p>Add Allergies (use space to add more)</p>{" "}
                            </div>
                            <div className="inp-tell space ">
                                <input
                                    type="text"
                                    placeholder="Allergies "
                                    className="allergies"
                                    name="allergies"
                                    value={formData?.allergies}
                                    onChange={(e) => {
                                        handleInputChange(e);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="align"></div>
                        <div className="inp-tell bbb space left">
                            <div className="addSiblingsContainer">
                                <p>Add Siblings</p>{" "}
                                <Link to="" alt="" onClick={handleAddSiblings}>
                                    Add More
                                </Link>
                            </div>
                            <div>
                                {siblings?.map((element, index) => (
                                    <div
                                        className="inp-tell formContainer space "
                                        key={index}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Sibling's Name"
                                            name="siblingName"
                                            value={element?.siblingName}
                                            className="sibling-name formItem"
                                            onChange={(e) => {
                                                // console.log(e.target?.name);
                                                const obj = {
                                                    key: "siblingName",
                                                    value: e.target.value,
                                                };
                                                handleSibling(obj, index);
                                            }}
                                        />
                                        <input
                                            placeholder="Date of Birth"
                                            name="dateOfBirth"
                                            value={element?.dateOfBirth}
                                            type="date"
                                            className="dob formItem"
                                            onChange={(e) => {
                                                // console.log(e.target?.name);
                                                const obj = {
                                                    key: "siblingDOB",
                                                    value: e.target.value,
                                                };
                                                handleSibling(obj, index);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="input-main">
                        <div className="inp-tell space ">
                            <select
                                className="input"
                                onChange={(e) => {
                                    setimagevideoAuthorization(e.target.value);
                                }}
                            >
                                <option selected disabled>
                                    image/video Authorization
                                </option>
                                <option>image</option>
                                <option>video</option>
                            </select>
                        </div>
                        <div className="inp-tell bbb space left ">
                            <select
                                className="input"
                                onChange={(e) => {
                                    setExteriorTripAuthorization(
                                        e.target.value
                                    );
                                }}
                            >
                                <option selected disabled>
                                    Exterior Trip Authorization
                                </option>
                                <option>sample 1</option>
                                <option>sample 2</option>
                                <option>sample 3</option>
                                <option>sample 4</option>
                            </select>
                        </div>
                    </div>

                    <div className="btn-parent">
                        <div className="btn-p">
                            <div className="btn-pc">
                                <button
                                    className="button pdg back"
                                    onClick={Back}
                                >
                                    Back
                                </button>
                            </div>
                            <div className="btn-pc">
                                <button
                                    className="button pdg"
                                    onClick={Forward}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ChildHealthDetails;
