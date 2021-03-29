import React from "react";
import "./PageNotFound.css";

export default function PageNotFound() {
    return (
        <div className="wrapper">
            <div className="container-h2">
                <h2>Oops, This Page Could Not Be Found!</h2>
            </div>
            <div className="container-p">
                <p>
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                </p>
            </div>
        </div>
    );
}
