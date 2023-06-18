import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../component/css/childdetails.css";
import "react-phone-input-2/lib/style.css";
import "../component/css/emergencycontact.css";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, submitFormData } from "../redux/actions";

function Emergencycontact({ Back, Forward }) {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");

    const handleOnChange = (value, country) => {
        setPhoneNumber(value);
        setCountryCode(country?.dialCode);
    };
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formData);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(updateFormData({ [name]: value }));
    };

    const [EmergencyContactFirstName, setEmergencyContactFirstName] =
        useState(" ");

    const [EmergencyContactLastName, setEmergencyContactLastName] =
        useState(" ");
    const [MobileNumberemergency, setMobileNumberemergency] = useState("");
    const [RelationToChild, setRelationToChild] = useState(" ");
    const [CompanionDetails, setCompanionDetails] = useState(" ");

    const [formValues, setFormvalues] = useState([
        {
            EmergencyContactFirstName: "",
            EmergencyContactLastName: "",
            MobileNumberemergency: "",
            RelationToChild: "",
            CompanionDetails: "",
        },
    ]);

    const handleLink = (e) => {
        e.preventDefault();
        const temp = [...formValues];
        temp.push({
            EmergencyContactFirstName: "",
            EmergencyContactLastName: "",
            MobileNumberemergency: "",
            RelationToChild: "",
            CompanionDetails: "",
        });
        setFormvalues(temp);
        dispatch({ type: "UPDATE_FORM_DATA", payload: formData });
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
                            <h3>Emergency Contact Details</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi
                            </p>
                        </div>
                    </div>

                    <div className="input-main">
                        <div className="inp-tell space"></div>
                    </div>

                    <div className="input-add">
                        <div>
                            {formValues.map((element, index) => (
                                <div>
                                    <div className="input-main">
                                        <div className="inp-tell space">
                                            <input
                                                className="input"
                                                id="emerCont"
                                                type="text"
                                                placeholder="Emergency Contact First Name "
                                                name={`emergencyContactFirstName${
                                                    index + 1
                                                }`}
                                                value={
                                                    element?.emergencyContactFirstName1
                                                }
                                                onChange={(e) => {
                                                    handleInputChange(e);
                                                }}
                                            />
                                        </div>
                                        <div className="inp-tell space bbb left">
                                            <input
                                                className="input"
                                                id="emerCont"
                                                name={`emergencyContactLastName${
                                                    index + 1
                                                }`}
                                                value={
                                                    element?.emergencyContactLastName1
                                                }
                                                type="text"
                                                placeholder="Emergency Contact Last Name "
                                                onChange={(e) => {
                                                    handleInputChange(e);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-main">
                                        <div className="inp-tell space">
                                            <PhoneInput
                                                country={countryCode}
                                                value={
                                                    element?.emergencyContact1
                                                }
                                                onChange={(e) => {
                                                    console.log(e);
                                                    const event = {};
                                                    event.target = {
                                                        value: e,
                                                        name: `emergencyContact${
                                                            index + 1
                                                        }`,
                                                    };
                                                    handleInputChange(event);
                                                }}
                                                placeholder="Mobile Number "
                                                className="input impt"
                                            />
                                        </div>
                                        <div className="inp-tell space bbb left">
                                            <select
                                                className="input"
                                                name={`relationToChild${
                                                    index + 1
                                                }`}
                                                value={
                                                    element?.relationToChild1
                                                }
                                                onChange={(e) => {
                                                    handleInputChange(e);
                                                }}
                                            >
                                                <option selected disabled>
                                                    Relation To Child
                                                </option>
                                                <option value={"Mother"}>
                                                    Mother
                                                </option>
                                                <option value={"Father"}>
                                                    Father
                                                </option>
                                                <option value={"Brother"}>
                                                    Brother
                                                </option>
                                                <option value={"Sister"}>
                                                    Sister
                                                </option>
                                                <option value={"Grand-Father"}>
                                                    Grand-Father
                                                </option>
                                                <option value={"Grand-Mather"}>
                                                    Grand-Mather
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-add">
                                        <div className="inp-add">
                                            <input
                                                type="text"
                                                placeholder="Companion Details......."
                                                className="addnext input"
                                                id="companion"
                                                onChange={(e) => {
                                                    setCompanionDetails(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {index !== formValues.length - 1 && (
                                        <hr className="hr-line" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="inp-add">
                            <div className="add ">
                                <Link to="" alt="" onClick={handleLink}>
                                    Add Next Emergency Contact
                                </Link>
                            </div>
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

export default Emergencycontact;
