import React, { useState } from "react";
import { withRouter } from "react-router";

import "../style.css";

import api from "../../services/api";

function SignUp({ history }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        await api.post("/signupuser", {
            firstName,
            lastName,
            email,
            username,
            password,
        });
        history.push("/login");
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
                    placeholder="Digite o seu username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
