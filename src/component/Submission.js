import React, { useState, useEffect } from "react";
import "../component/css/childdetails.css";
import "../component/css/emergencycontact.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, submitFormData } from "../redux/actions";

function Submission({ Back }) {
    const dispatch = useDispatch();
    const [siblings, setSiblings] = useState([
        { siblingName: "", siblingDOB: "" },
    ]);
    const formData = useSelector((state) => state.formData);
    //have a function to handle change of the siblings
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(
            updateFormData({
                [name]: value,
            })
        );
    };
    useEffect(() => {}, []);

    const [submittedBy, setSubmittedBy] = useState("");
    const [hearAboutUs, setHearAboutUs] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmittedByChange = (event) => {
        const inputValue = event.target.value;
        setSubmittedBy(inputValue);

        if (inputValue.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                submittedBy: "Please enter who the form was submitted by.",
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, submittedBy: "" }));
        }
    };

    const handleSubmittedByBlur = () => {
        if (submittedBy.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                submittedBy: "Please enter who the form was submitted by.",
            }));
        }
    };

    const handleHearAboutUsChange = (event) => {
        const inputValue = event.target.value;
        setHearAboutUs(inputValue);
    };

    const handleSubmit = async () => {
        const newErrors = {};

        if (submittedBy.trim() === "") {
            newErrors.submittedBy =
                "Please enter who the form was submitted by.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            var options = {
                formData: {
                    daycare_id: "642074d7965b0d1a4446b522",
                    applicationID: "SWIN-001-1",
                    firstName: "TestFirstName",
                    lastName: "TestLast",
                    weight: "35",
                    weightUnit: "kg",
                    height: "125",
                    heightUnit: "cm",
                    dateOfBirth: "2014-04-20",
                    age: "8",
                    gender: "Female",
                    motherFirstName: "MomFirstName",
                    motherLastName: "MomLastName",
                    motherMobile: "+919999999999",
                    motherEmail: "mother@email.com",
                    fatherFirstName: "FatherFirstName",
                    fatherLastName: "FatherLastName",
                    fatherMobile: "+917777777777",
                    fatherEmail: "father@email.com",
                    allergies: "TestAllergy",
                    siblings:
                        '[{"siblingName":"TestSibling", "siblingDOB":"2016-07-30"}]',
                    photoVideoAuthorization: "Yes",
                    exteriorTripAuthorization: "yes",
                    sessionId: "6427389a1bbb381bbc10fc24",
                    bloodGroup: "A",
                    howDidYouHearAboutUS: "From our website",
                    submittedBy: "Mother",
                    emergencyContactFirstName1: "EmergencyFirstName",
                    emergencyContactLastName1: "EmergencyLastName",
                    emergencyContact1: "918888888888",
                    relationToChild1: "Father",
                },
            };
            try {
                formData.daycare_id = "642074d7965b0d1a4446b522";
                formData.applicationID = "SWIN-001-1";
                console.log({ formData });
                formData.siblings = JSON.stringify(formData?.siblings);
                const { data } = await axios.post(
                    // "http://localhost:5000/student/enroll-child",
                    "https://ec2-43-205-191-57.ap-south-1.compute.amazonaws.com:3443/enrollChild",
                    formData
                );
                if (data.status === 200) {
                    console.log(data);
                }
            } catch (e) {
                console.log(e);
            }
        }
        alert("Data Stored Successfully");
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
                            <h3>Submission by</h3>
                        </div>
                    </div>
                    <div className="input-add">
                        <div className="inp-add">
                            <input
                                name="submittedBy"
                                value={formData?.submittedBy}
                                type="text"
                                placeholder="Form Submitted By *"
                                onBlur={handleSubmittedByBlur}
                                onChange={(e) => {
                                    handleSubmittedByChange(e);
                                    handleInputChange(e);
                                }}
                                className="input"
                            />
                            {errors.submittedBy && (
                                <div className="error">
                                    {errors.submittedBy}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="input-add">
                        <div className="inp-add">
                            <input
                                type="text"
                                placeholder="How did you hear about us? *"
                                onChange={(e) => {
                                    handleHearAboutUsChange(e);
                                    handleInputChange(e);
                                }}
                                name="howDidYouHearAboutUS"
                                value={formData?.howDidYouHearAboutUS}
                                className="input"
                            />
                        </div>
                        <div className="inp-tell space bbb left"></div>
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
                                    onClick={() => {
                                        handleSubmit();
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Submission;
