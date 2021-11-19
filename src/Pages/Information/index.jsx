import React from 'react'
import { PageTemplate } from '../../Components/PageTemplate'
import './style.scss'
import Input from '../../Components/Input'
import { useHistory} from 'react-router-dom'

export const Information = (props) => {   
    const history = useHistory();
 
    const [detailUser, setDetailUser] = React.useState({})
    const [afiliado, setAfiliado] = React.useState("")
    let btnActive = true
    if(afiliado){
        btnActive = false
    }
    React.useEffect(() => {
        fetch('https://freestyle.getsandbox.com/dummy/obtenerdatospersona',{
            method: 'POST', 
              mode: 'cors', 
              cache: 'no-cache', 
              credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(data => setDetailUser(data.data.tercero))})
  
    return (        
        <div>            
            <PageTemplate>                               
                <div className="addParents__content--main">
                        <div className="addParents__content--main_head">
                            <h2>Hola, <span>{detailUser.nombres}</span></h2>
                            <p>Valida que tus datos sean correctos.</p>
                            <h3>Datos personales{} del titular</h3>
                        </div>
                        <div className="addParents__content--main_main">
                              
                            <Input valor={detailUser.numDocumento} type="text" label="Nro de Documento" />
                            <Input valor={detailUser.nombres} type="text" label="Nombres"  />                            
                            <Input valor={detailUser.apellidoPaterno} label="Apellido Paterno"  />                            
                            <Input valor={detailUser.apellidoMaterno} type="text" label="Apellido Materno"  /> 
                            <Input valor={detailUser.fecNacimiento} type="text" label="Fecha de Nacimiento"  /> 

                            <h3>Género</h3>   
                            <p>
                                <input type="radio" name="genero"  checked={detailUser.sexo === "M"} /><label>Masculino</label>
                            </p>
                            <p>
                                <input type="radio" name="genero" checked={detailUser.sexo === "F"}/><label>Femenino</label>
                            </p>
                            <h3>¿A quién vamos asegurar?</h3>
                            <p>
                                <input type="radio" name="afiliateAlone" defaultChecked={afiliado === "A"} onChange={()=> setAfiliado("A")} /><label>Solo a mi</label>
                            </p>
                            <p>
                                <input type="radio" name="afiliateFamily" defaultChecked={afiliado === "F"} onChange={()=> setAfiliado("F")} /><label>A mí y mi familia</label>
                            </p>
                            <div className="addParents__content--main_main-button" >                              

                            <button className="buttonCustom" onClick={()=> history.push('/plain')} disabled={btnActive}>
                                Continuar
                            </button>
                            </div>
                        </div>
                    </div>
            </PageTemplate>
        </div>
    )
}
