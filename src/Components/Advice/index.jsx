import React from 'react'
import illustration from '../../img/Illustration-1.png'
import icon1 from '../../img/gl_shield-20x20.png'
import mobile from '../../img/gl_mobile-20x20.png'
import "./style.scss"

const index = () => {
    return (
        <div className="advice">
           <div className="advice__info">
                <div className="advice__info--title">
                    <h1>Seguro de <span>Salud</span></h1>
                </div>
                <div className="advice__info--detail">
                    <ul>
                        <li>  <img src={icon1} alt="shield" />  Cómpralo de manera fácil y rápida</li>
                        <li> <span><img src={mobile} alt="mobile" /></span> Cotiza y compra tu seguro 100% digital</li>
                        <li> <span> <img src={icon1} alt="shield" /> </span> Hasta S/. 12 millones de cobertura anual</li>
                        <li> <span> <img src={mobile} alt="shield" /> </span> Más de 300 clínicas en todo el Perú</li>
                    </ul>
                </div>
                <div className="advice__info--footer">
                    c 2020 RIMAC Seguros y Reaseguros
                </div>
            </div>
            <div className="advice__banner">
                <div className="advice__banner--footer">
                    <img src={illustration} alt="" />
                </div>
            </div> 
        </div>
    )
}

export default index
