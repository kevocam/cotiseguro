import React from 'react'
import illustration from '../../img/Illustration-1.png'
import './style.scss'

const index = (props) => {
    return (
        <div className="base"> 
            <div className="base__content">
                {props.children}
            </div>           
            <div className="base__illustration">
                <img src={illustration} alt="" />                
            </div> 
        </div>
    )
}

export default index
