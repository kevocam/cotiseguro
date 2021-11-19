import React, {useState, useEffect} from 'react'
import './style.scss'


  
const Input = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState("");    
    const [datePicker, setDatePicker] = useState("hideDatePicker")   

    useEffect(() => { 
      
    },[])

    const handleTextChange = (text) =>{
      if(props.valor){
        setValue(text);
        if (text !== '') {
          console.log(value)
          setIsActive(true);
          setDatePicker("showDatePicker")          
        } else {
          setIsActive(false);          
        }

      }
    }
    return (
        <div className="float-label">
            <input 
            name={props.name}
            value={props.valor}
            onChange={(e) => handleTextChange(e.target.value)}
            type={props.type} 
            className={ props.type === "date" ? datePicker : "" }
            />
            <label className={ isActive || props.valor ? "Active" : ""} >
                {props.label}
            </label>
        </div>
    )
}
export default Input
