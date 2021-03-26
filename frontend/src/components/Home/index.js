import React from "react";
import "./Home.css";

import personagem from "../../assets/Personagem-Com-Celular.png";

function Home({ history }) {
    function handleLogin(e) {
        e.preventDefault();
        history.push("/login");
    }

    function handleSignup(e) {
        e.preventDefault();
        history.push("/signup");
    }

    return (
        <div className="container-home">
            <div className="text-content">
                <h1 id="firstP">Melhore sua gestão de</h1>
                <h1> Promotoras & Pontos de Venda</h1>
                <h2>
                    Agora você controla bônus, comissões e cada venda do seu PDV
                    em tempo real. Conecte-se com promotoras e vendedoras de um
                    jeito mais inteligente.
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
                    src={personagem}
                    alt="Personagem com Celular"
                />
            </div>
        </div>
    );
}

export default Home;
