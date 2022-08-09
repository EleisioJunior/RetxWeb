import React from "react"

export function Agendamento(){
    return(
<main>
    <header className="cabecalho3">
        <div className="cabecalho__container3">
            <h2>Agendamentos</h2>
            <p className="contador">5 periodos</p>
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
    <section className="secao__carros">
        <ul className="secao__carros_lista">
            <li>
                <li className="cartao2">
                    <div className="secao__carros_info">
                        <p className="sub__texto">CHEVROLET</p>
                        <h1 className="espaco">Corvette Z06</h1>
                        <p className="sub__texto">POR 3 DIAS</p>
                        <div className="tipo__preco">
                            <p className="preco">R$ 120</p>
                            <img className="tipo" src={require("../../Img/Energia.png")}/>
                        </div>
                    </div>
                        <div className="secao__carros_imagem">
                        <img src={require("../../Img/Lancer.png")}/>
                    </div>
                </li>
                <li className="cartao__atributos2">
                    <h1>Utilizando até 17 junho 2020</h1>
                </li>
            </li>
            <li>
                <li className="cartao2">
                    <div className="secao__carros_info">
                        <p className="sub__texto">CHEVROLET</p>
                        <h1 className="espaco">Corvette Z06</h1>
                        <p className="sub__texto">POR 3 DIAS</p>
                        <div className="tipo__preco">
                            <p className="preco">R$ 120</p>
                            <img className="tipo" src={require("../../Img/Energia.png")}/>
                        </div>
                    </div>
                        <div className="secao__carros_imagem">
                        <img src={require("../../Img/Corvete Z06.png")}/>
                    </div>
                </li>
                <li className="cartao__atributos">
                    <p className="sub__texto">PERÍODO</p>
                    <p>18 junho 2019</p>
                    <img src={require("../../Img/Seta.png")}/>
                    <p>20 junho 2020</p>
                </li>
            </li>
            <li>
                <li className="cartao2">
                    <div className="secao__carros_info">
                        <p className="sub__texto">CHEVROLET</p>
                        <h1 className="espaco">Corvette Z06</h1>
                        <p className="sub__texto">POR 3 DIAS</p>
                        <div className="tipo__preco">
                            <p className="preco">R$ 120</p>
                            <img className="tipo" src={require("../../Img/Energia.png")}/>
                        </div>
                    </div>
                        <div className="secao__carros_imagem">
                        <img src={require("../../Img/Lambo.png")}/>
                    </div>
                </li>
                <li className="cartao__atributos">
                    <p className="sub__texto">PERÍODO</p>
                    <p>18 junho 2019</p>
                    <img src={require("../../Img/Seta.png")}/>
                    <p>20 junho 2020</p>
                </li>
            </li>
        </ul>
    </section>
</main>



        )
}