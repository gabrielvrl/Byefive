import React from "react";

import "./Header.css";
import logo from "../../assets/logoByefiveFull.png";

function Header({ history }) {
    function handleAboutUs(e) {
        e.preventDefault();
        history.push("/aboutus");
    }

    function handleContact(e) {
        e.preventDefault();
        history.push("/contact");
    }

    function handleLogin(e) {
        e.preventDefault();
        history.push("/login");
    }

    return (
        <nav>
            <div className="headerDiv">
                <div className="leftSection">
                    <div className="imgDiv" onClick={() => history.push("/")}>
                        <img src={logo} alt="Byefive" />
                    </div>
                    <h1 onClick={handleAboutUs}>Sobre Nós</h1>
                    <h1 onClick={handleContact}>Contato</h1>
                </div>
                <div className="rightSection">
                    <h1 onClick={handleLogin}>Login</h1>
                    <button id="nav-learn-more-button">Quero saber mais</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
