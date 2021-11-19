import React from "react";
import { useState } from "react";
import Advice from '../../Components/Advice'
import './style.scss'
import TextField from '@material-ui/core/TextField';
import {  createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { useHistory} from 'react-router-dom'

interface User {
    dni:string;
    date:string;
    phone:string;
} 
const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
            },
        }),
);

export const Home = (props:any) => {
    const history = useHistory();
    const classes = useStyles();    
    const [checkedSend, setCheckedSend] = useState<any>(false)
    const [checkedPolitica, setCheckedPolitica] = useState<any>(false)
    let btnActive = true;      

    if(checkedSend && checkedPolitica){ //activar boton comenzar si lo checkbox estan activos
        btnActive=false;
    }
    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props: CheckboxProps) => <Checkbox color="default" {...props} />);      
       
    const handlerForm = (e:any) => { // Deberia valdiar en un endpoint el usuario en el backend, si es correcto pasa 
        e.preventDefault()        
        props.handlerForm(e.target.dni.value,e.target.date.value,e.target.phone.value)
        history.push('/information')
    }
    const onlyNumbers = (e:any) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') };
    return (        
        <div className="containerLogin">

            <div className="containerLogin__advice">
                <Advice />                        
            </div>

            <div className="containerLogin__form">
            
                <div className="containerLogin__form--title">
                    <h2>Obtén tu  <span> seguro ahora </span></h2>
                    <p>Ingresa los datos para comenzar</p>
                </div>                     
            
                <form onSubmit={ handlerForm}  className={classes.root} autoComplete="off" >                
                    <div className="containerLogin__form--item">
                        <div className="containerLogin__form--item--doc">
                            <Select
                                native                        
                                label="Doc."
                                variant="outlined"                               
                                >
                                <option aria-label="None" value="sadasd" />
                                <option selected >DNI</option>
                                <option >Carnet</option>                        
                            </Select>
                            <TextField         
                            required                      
                            id="filled-error"
                            label="Nro de documento"
                            defaultValue=""
                            variant="outlined"
                            inputProps={{ maxLength: 8, minLength:8 }}
                            onInput={(e) => onlyNumbers(e) }    
                            name="dni"                        
                            />
                        </div>
                        <TextField  
                        className="inputCustom"
                        required
                        id="date"
                        label="Fecha de nacimiento"
                        type="date"
                        name="date" 
                        defaultValue=""  
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                        <TextField   
                        required
                        className="inputCustom"  
                        type="text"               
                        id="filled-error-helper-text"
                        label="Celular"
                        defaultValue=""                                        
                        variant="outlined"
                        inputProps={{ maxLength: 9 }}
                        onInput={(e) => onlyNumbers(e) }                        
                        name="phone"
                        />
                    </div>
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedPolitica" defaultChecked={checkedPolitica} onChange={()=> setCheckedPolitica(true)} />}
                        label="Acepto la Politica de Protección de Datos Personales y los Terminos y Condiciones "
                    />
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedSend" defaultChecked={checkedSend} onChange={()=> setCheckedSend(true)}/>}
                        label=" Acepto la Politica de Envio de Comunicaciones Comerciales"
                    />
                    <button className="buttonCustom" type="submit" disabled={btnActive}>
                        Comencemos
                    </button>                    
                </form>
            </div>
        </div>        
    )
}
