import React, { useState } from "react";
import { withRouter } from "react-router";

import "../style.css";

function Login({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
    }

    function handleSingUp(e) {
        e.preventDefault();
        history.push("/signup");
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Digite o seu email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Digite sua senha"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
            <h1 onClick={handleSingUp}>
                Ainda não está cadastrado? Cadastre-se!
            </h1>
        </div>
    );
}

export default withRouter(Login);
