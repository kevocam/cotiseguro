import React from 'react'
import win from '../../img/Illustration.png'
import './style.scss'


function Card(props) {

    return (
        <div className="card">
            <div className="card__title">
                Cuenta con estos beneficios
            </div>
            <div className="card__content">
                <div className="card__content--hero">
                    <div className="card__content--hero_info">
                        <div className="card__content--hero_info-title">
                            Cobertura máxima
                        </div>
                        <div className="card__content--hero_info-mount">
                            {props.plan === "Básico" ? "S/1MM" : "S/5MM"}
                        </div>
                        <div className="card__content--hero_info-badge">
                            <div className="card__content--hero_info-badge_item">
                                PLAN {props.plan.toUpperCase()}
                            </div>
                        </div>
                    </div>
                    <div className="card__content--hero_img">
                            <img src={win} alt="insign" />
                    </div>
                </div>
                <div className="card__content--line">

                </div>
                <div className="card__content--details">
                    <ul>
                        <li><span>💙</span>Lima <em>(zona de Cobertura)</em> </li>
                        <li><span>💙</span>+ 30 clínicas <em>(en red afiliada)</em> </li>
                        <li><span>💙</span>Médico a domicilio </li>
                        <div className={props.plan === "Básico" ? "basic" : "all"}>
                            <li><span>💙</span>Chequeos preventivos </li>
                            <li><span>💙</span>Reembolso nacional </li>
                            <li><span>💙</span>Reembolso internacional </li>

                        </div>                        
                    </ul>
                </div>                
            </div>
            
        </div>
    )
}

export default Card
