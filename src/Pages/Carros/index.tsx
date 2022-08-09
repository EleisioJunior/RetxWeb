import React from "react";



export function Carros(){
    return(

<main>
    <header className="cabecalho2">
        <div className="cabecalho__container2">
            <h2>Listagem</h2>
            <p className="contador">12 carros</p>
        </div>
        <div className="cabecalho__div">
            <input className="cabecalho__imput" type={'search'} placeholder={"Qual carro você procura?"}></input>
            <button className="imput__botao"></button>
        </div>
    </header>
    <nav className="navegacao ">
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
    <section className="secao__carros">
        <ul className="secao__carros_lista">
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
            <li className="cartao2">
                <div className="secao__carros_info">
                    <p className="sub__texto">PORCHE</p>
                    <h1 className="espaco">Panamera</h1>
                    <p className="sub__texto">AO DIA</p>
                    <div className="tipo__preco">
                        <p className="preco">R$ 120</p>
                        <img className="tipo" src={require("../../Img/Energia.png")}/>
                    </div>
                </div>
                <div className="secao__carros_imagem">
                    <img src={require("../../Img/Porche.png")}/>
                </div>
            </li>
            <li className="cartao2">
                <div className="secao__carros_info">
                    <p className="sub__texto">CHEVROLET</p>
                    <h1 className="espaco">Corvette Z06</h1>
                    <p className="sub__texto">AO DIA</p>
                    <div className="tipo__preco">
                        <p className="preco">R$ 120</p>
                        <img className="tipo" src={require("../../Img/Energia.png")}/>
                    </div>
                </div>
                    <div className="secao__carros_imagem">
                    <img src={require("../../Img/Corvete Z06.png")}/>
                </div>
            </li>
            <li className="cartao2">
                <div className="secao__carros_info">
                    <p className="sub__texto">LAMBORGUINI</p>
                    <h1 className="espaco">Hurucan</h1>
                    <p className="sub__texto">AO DIA</p>
                    <div className="tipo__preco">
                        <p className="preco">R$ 120</p>
                        <img className="tipo" src={require("../../Img/Energia.png")}/>
                    </div>
                </div>
                    <div className="secao__carros_imagem">
                    <img src={require("../../Img/Lambo.png")}/>
                </div>
            </li>
            
        </ul>
    </section>

</main>


)
}