import React from 'react'
import './style.scss'

function Button(props) {
    return (
        <button className="buttonCustom" type={props.type ? "button" : ""} >{props.text}</button>
    )
}
export default Button
