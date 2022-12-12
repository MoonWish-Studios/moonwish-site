import React from "react";
import LottieAstronaut from "../(components)/LottieAstronaut";
export default function Custom404() {
    return (
        <div className="error-404-section">
            <LottieAstronaut />
            <p className="caption">
                We were unable to find the page you were looking for :(
            </p>
        </div>
    );
}
