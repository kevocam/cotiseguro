import React from 'react'
import { PageTemplate } from '../../Components/PageTemplate'
import SimpleCard from '../../Components/SimpleCard'
import Card from '../../Components/Card'
import './style.scss'
import { useHistory} from 'react-router-dom'

export const Plan = () => {
    const history = useHistory();

    const [planActive, setPlanActive] = React.useState("");

    const handlerCard = (plan:any)=> {
        setPlanActive(plan)
    }
    let btnActive = true;
    if(planActive){
        btnActive = false;
    }
    return (
        <div>
            <PageTemplate>
            <div className="choisePlan__content--main">
                    <div className="choisePlan__content--main_head">
                        <h2>Elige <span>tu protección </span></h2>
                        <p>Selecciona tu plan de salud ideal.</p>                        
                    </div>
                    <div className="choisePlan__content--main_hero">
                        <SimpleCard plan="Básico" mount="160" footer="mensual" handlerCard={handlerCard} check={planActive === "Básico" ? "on" : "of" }/>
                        <SimpleCard plan="Avanzado" mount="200" footer="mensual" handlerCard={handlerCard} check={planActive === "Avanzado" ? "on" : "of"}/>
                        <SimpleCard plan="Premium" mount="250" footer="mensual" handlerCard={handlerCard} check={planActive === "Premium" ? "on" : "of"}/>
                        <SimpleCard plan="Full" mount="500" footer="mensual" handlerCard={handlerCard} check={planActive === "Full" ? "on" : "of"}/>
                    </div>
                    <div className="choisePlan__content--main_card">
                        <Card plan={planActive}/>
                    </div>
                    <div className="choisePlan__content--main_footer">
                        <h3>Revisa nuestros <span>servicios y exclusiones</span></h3>
                        <ul>
                            <li>Servicios brindados <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2F80ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="6 9 12 15 18 9" />
                                </svg></span>
                            </li>
                            <li>Exclusiones<span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2F80ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="6 9 12 15 18 9" />
                                </svg></span>
                            </li>   
                            <li></li>                         
                        </ul>
                    </div>
                    <div className="choisePlan__content--main_button">

                    <button className="buttonCustom" onClick={()=> history.push('/thanks')} disabled={btnActive}>
                                Continuar
                            </button>
                    </div>


                </div>
            </PageTemplate>
        </div>
    )
}
