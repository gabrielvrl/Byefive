import React, { useState } from "react";
import { withRouter } from "react-router";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";

import "../style.css";

function Login({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        notify();

        const response = await api.post("/login", {
            username,
            password,
        });

        const { _id } = response.data;
        const apiUsername = response.data.username;
        const apiPassword = response.data.password;

        if (username === apiUsername && password === apiPassword) {
            history.push(`/user/${_id}`);
        } else {
            notify();
            console.log("error");
        }
    }

    function notify() {
        toast.error("Something went wrong!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
                <button type="submit">Entrar</button>
            </form>
            <h1 onClick={handleSingUp}>
                Ainda não está cadastrado? Cadastre-se!
            </h1>
        </div>
    );
}

export default withRouter(Login);
