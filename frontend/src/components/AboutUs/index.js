import React from "react";

import "./AboutUs.css";

import foto from "../../assets/Foto-Sobre-Nos-Mockup.png";

function AboutUs({ history }) {
    function handleLogin(e) {
        e.preventDefault();
        history.push("/login");
    }

    function handleSignup(e) {
        e.preventDefault();
        history.push("/signup");
    }

    return (
        <div className="wrapper">
            <div className="container-aboutus">
                <div className="text-content">
                    <h1 id="firstP">
                        Organizar as relações através da tecnologia
                    </h1>
                    <h1>gerando mais valor para todos.</h1>
                    <h2>
                        Um sistema com tecnologia segura, que permite que
                        promotoras e vendedoras presentes no ponto de venda
                        troquem informações com as marcas, controlando e
                        informando as vendas em tempo real.
                    </h2>
                    <h2 id="login" onClick={handleLogin}>
                        Faça o <b>Login</b>
                    </h2>
                    <h2 id="login" onClick={handleSignup}>
                        Ainda não tem cadastrado? <b>Cadastre-se!</b>
                    </h2>
                </div>
                <div className="img-content">
                    <img
                        className="personagem-img"
                        src={foto}
                        alt="Personagem com Celular"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
