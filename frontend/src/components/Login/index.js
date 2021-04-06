import React, { useState } from "react";
import { withRouter } from "react-router";

import api from "../../services/api";

import "../style.css";

function Login({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.get("/login", {
            username,
            password,
        });

        const { _id } = response.data;
        const apiUsername = response.data.username;
        const apiPassword = response.data.password;

        if (username === apiUsername && password === apiPassword) {
            history.push(`/user/${_id}`);
        } else {
            document.getElementById("incorrect-info").style.display("block");
        }
    }

    function handleSingUp(e) {
        e.preventDefault();
        history.push("/signup");
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Digite o seu username"
                    value={username}
                    type="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="Digite sua senha"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p id="incorrect-info">Usuário ou senha incorretos.</p>
                <button type="submit">Entrar</button>
            </form>
            <h1 onClick={handleSingUp}>
                Ainda não está cadastrado? Cadastre-se!
            </h1>
        </div>
    );
}

export default withRouter(Login);
