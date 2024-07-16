import React from "react";

// Video file
import LogoSignature from "../images/logo-signature.mp4";

// Styles
import "../styles/LoadingOverlay.css";

const LoadingOverlay = () => {
    return (
        <div className="loading-overlay-container">
            <video width="750" height="500" autoPlay muted loop>
                <source src={LogoSignature} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default LoadingOverlay;
