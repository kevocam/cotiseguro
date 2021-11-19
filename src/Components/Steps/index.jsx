import React from 'react'
import { useHistory } from "react-router-dom";
import './style.scss'

function Steps(props) {
    let history = useHistory();
    return (
        <div className="step">            
            <div className="step__icon" onClick={()=>history.goBack()}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2F80ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="15 6 9 12 15 18" />
                </svg>
            </div>
            <div className="step__content">
               <span>PASO {props.step} </span> DE {props.steps}
            </div>
        </div>
    )
}
 
export default Steps
