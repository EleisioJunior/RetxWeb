import React from "react"



export function Home(){
    return(
<main>
    <header className="cabecalho">
        <div className="cabecalho__container">
            <div>
                <p className="sub__texto">DE</p>
                <input className="data" type={'date'} value={"2022-01-01"}/>
            </div>
            <div>
                <p className="sub__texto">ATÉ</p>
                <input className="data" type={'date'} value={"2022-01-01"}/>
            </div>
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
    <div className="resultados">
        <h2>Resultados</h2>
        <p className="contador">3 carros</p>
        <button></button>  
    </div>
    <section className="secao__carros">
        <ul className="secao__carros_lista">
            <li className="cartao">
                <div className="cartao__espacamento">
                    <div>
                        <p className="sub__texto">LAMBORGUINI</p>
                        <h1>Hurucan</h1>
                    </div>
                    <div>
                        <p className="sub__texto">AO DIA</p>
                        <h1 className="preco">R$ 500</h1>
                    </div>
                </div>
                <div>
                    <img className="cartao__imagem" src={require("../../Img/Lambo.png")}/>
                </div>
                <div className="cartao__espacamento">
                    <img className="icone" src={require("../../Img/Energia.png")}/>
                </div>
            </li>
            <li className="cartao">
                <div className="cartao__espacamento">
                    <div>
                        <p className="sub__texto">VOLVO</p>
                        <h1>XC40</h1>
                    </div>
                    <div>
                        <p className="sub__texto">AO DIA</p>
                        <h1 className="preco">R$ 260</h1>
                    </div>
                </div>
                <div>
                    <img className="cartao__imagem" src={require("../../Img/Volvo.png")}/>
                </div>
                <div className="cartao__espacamento">
                    <img className="icone" src={require("../../Img/Gasolina.png")}/>
                </div>
            </li>
            <li className="cartao">
                <div className="cartao__espacamento">
                    <div>
                        <p className="sub__texto">MISHUBIXY</p>
                        <h1>Lancer</h1>
                    </div>
                    <div>
                        <p className="sub__texto">AO DIA</p>
                        <h1 className="preco">R$ 200</h1>
                    </div>
                </div>
                <div>
                    <img className="cartao__imagem" src={require("../../Img/Lancer.png")}/>
                </div>
                <div className="cartao__espacamento">
                    <img className="icone" src={require("../../Img/Gasolina.png")}/>
                </div>
            </li>
        </ul>
    </section>
</main>




    );
}