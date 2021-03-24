import React, { useState } from "react";
import { withRouter } from "react-router";

import "../style.css";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Digite o seu primeiro nome"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    placeholder="Digite o seu sobrenome"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    placeholder="Digite o seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Digite sua senha"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Efetuar Cadastro</button>
            </form>
        </div>
    );
}

export default withRouter(SignUp);
