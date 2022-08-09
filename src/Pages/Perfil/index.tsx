import React from "react";

export function Perfil(){
    return(


<main>
    <header className="cabecalho__perfil">
        <div className="cabecalho__perfil_top">
            <img src={require("../../Img/Editar.png")}></img>
            <h2>Perfil</h2>
            <img src={require("../../Img/Sair.png")}></img>
        </div>
        <div className="cabecalho__perfil_foto">
        </div>
    </header>
    <nav className="navegacao">
        <div className="navegacao__container">
            <img className="nav__itens" src={require("../../Img/Home.png")}/>
            <img className="nav__itens nav_ativo" src={require("../../Img/Carros.png")}/>
            <img className="nav__itens" src={require("../../Img/Agendamentos.png")}/>
            <img className="nav__itens" src={require("../../Img/Perfil.png")}/>
        </div>
        <div className="navegacao__slide">
            <div className="slide">
            </div>
        </div>
    </nav>
    <section className="perfil_info">
        <h3 className="cabecalho__perfil_nome">Exemplo Exemplo</h3>
        <div className="perfil__agendamentos">
            <p className="sub__texto2">Agendamentos feitos</p>
            <p>05</p>
        </div>
        <div className="perfil__favorito">
            <p className="sub__texto2">Carro Favorito</p>
            <p>Utilizado 2 vezes</p>
        </div>  
        <div className="secao__carros_lista">
            <li className="cartao2">
                <div className="secao__carros_info">
                    <p className="sub__texto">AUDI</p>
                    <h1 className="espaco">RS 5 Coupé</h1>
                    <p className="sub__texto">AO DIA</p>
                    <div className="tipo__preco">
                        <p className="preco">R$ 120</p>
                        <img className="tipo" src={require("../../Img/Energia.png")}/>
                    </div>
                </div>
                <div className="secao__carros_imagem">
                <img src={require("../../Img/Audi.png")}/>
                </div>
            </li>
        </div>
    </section>
</main>        


    )

}