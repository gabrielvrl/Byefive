import React from "react";

import "./Header.css";
import logo from "../../assets/logoByefiveFull.png";

function Header({ history }) {
    return (
        <div className="headerDiv">
            <div className="imgDiv" onClick={() => history.push("/")}>
                <img src={logo} alt="Byefive" />
            </div>
            <h1>Login</h1>
        </div>
    );
}

export default Header;
