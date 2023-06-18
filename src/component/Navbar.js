import React, { useState } from "react";
import Childdetails from "./Childdetails";
import "../component/css/Navbar.css";

import Vector from "../component/image/Vector.svg";
import Parentdetails from "./Parentdetails";
import Emergencycontact from "./Emergencycontact";
import Submission from "./Submission";
import ChildHealthDetails from "./ChildHealthDetails";

function Navbar() {
    const [currentView, setCurrentView] = useState(1);

    const renderView = () => {
        // eslint-disable-next-line default-case
        switch (true) {
            case currentView === 1:
                return <Childdetails Forward={handleNext} />;

            case currentView === 2:
                return <Parentdetails Back={handleBack} Forward={handleNext} />;

            case currentView === 3:
                return (
                    <ChildHealthDetails
                        Back={handleBack}
                        Forward={handleNext}
                    />
                );

            case currentView === 4:
                return (
                    <Emergencycontact Back={handleBack} Forward={handleNext} />
                );

            case currentView === 5:
                return <Submission Back={handleBack} Forward={handleNext} />;
        }
    };

    const isActive = (v) => {
        if (v === currentView) return "active";
        else return null;
    };

    const handleNext = () => {
        setCurrentView(currentView + 1);
    };

    const handleBack = () => {
        setCurrentView(currentView - 1);
    };

    return (
        <>
            <div className="navbar-head">
                <div className="navbar-child tp-pding">
                    <div className="algn">
                        <img src={Vector} alt="" className="navbar-img " />
                    </div>{" "}
                    <div className="Link-tag">
                        <div
                            className="Link font-fmly"
                            onClick={() => {
                                setCurrentView(1);
                            }}
                        >
                            <span className={`${isActive(1)}`}> 01 </span>{" "}
                            <label> Child Details </label>{" "}
                        </div>{" "}
                        <div
                            className="Link font-fmly"
                            onClick={() => {
                                setCurrentView(2);
                            }}
                        >
                            <span className={`${isActive(2)}`}> 02 </span>{" "}
                            <label> Parent Details </label>{" "}
                        </div>{" "}
                        <div
                            className="Link font-fmly"
                            onClick={() => {
                                setCurrentView(3);
                            }}
                        >
                            <span className={`${isActive(3)}`}> 03 </span>{" "}
                            <label> Child Health Details </label>{" "}
                        </div>{" "}
                        <div
                            className="Link font-fmly"
                            onClick={() => {
                                setCurrentView(4);
                            }}
                        >
                            <span className={`${isActive(4)}`}> 04 </span>{" "}
                            <label> Emergency Contact </label>{" "}
                        </div>{" "}
                        <div
                            className="Link font-fmly"
                            onClick={() => {
                                setCurrentView(5);
                            }}
                        >
                            <span className={`${isActive(5)}`}> 05 </span>{" "}
                            <label> Submission </label>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="navbar-child2"> {renderView()} </div>{" "}
            </div>{" "}
        </>
    );
}

export default Navbar;
