import React from 'react'
import './style.scss'
import check from '../../img/gl_correct.png'

function SimpleCard(props) {

    const handlerCard = () =>{
        props.handlerCard(props.plan)        
    }
   
    return (
        <div className={"simpleCard" } style={ props.check === "on" ? {borderColor:'green', boxShadow: "0 8px 14px rgba(0, 0, 0, .2)"} : {borderColor:'white'} } onClick={handlerCard}>   
            <div className="simpleCard__check">
                {
                    props.check === "on" && <img src={check} alt="check"/> 
                }
            </div>
            <div className="simpleCard__title">
                {props.plan}
            </div>
            <div className="simpleCard__number">
                S/ <span>{props.mount}</span> 
            </div>
            <div className="simpleCard__footer">
                {props.footer}
            </div>
            
        </div>
    )
}

export default SimpleCard
