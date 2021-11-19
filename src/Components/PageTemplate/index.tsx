import React from 'react'
import Base from '../Base/';
import Steps from '../Steps'
import './style.scss'

export const PageTemplate= ({children}:any) => {
    return (
        <div className="addParents">
        <section className="addParents__base">
            <Base />                                                
        </section>
        <section className="addParents__content">
            <div className="addParents__content--steps">
                <Steps step="1" steps="7" />
            </div>
            <div className="addParents__content--main">
                        {children}
                {/* <div className="addParents__content--main_head">
                    <h2>Hola, <span>{name}</span></h2>
                    <p>Valida que tus datos sean correctos.</p>
                    <h3>Datos personales{} del titular</h3>
                </div>
                <div className="addParents__content--main_main">
                        <Input valor={dni} type="text" label="Nro de Documento" />
                        <Input valor={name} type="text" label="Nombres"  />                            
                        <Input valor={appPaterno} label="Apellido Paterno"  />                            
                        <Input valor={appMaterno} type="text" label="Apellido Materno"  /> 
                        <Input valor={date} type="text" label="Fecha de Nacimiento"  /> 

                        <h3>Género</h3>   
                        <p>
                            <input type="radio" name="genero"  checked={genero === "M"} /><label>Masculino</label>
                        </p>
                        <p>
                            <input type="radio" name="genero" checked={genero === "F"}/><label>Femenino</label>
                        </p>
                        <h3>¿A quién vamos asegurar?</h3>
                        <p>
                            <input type="radio" name="afiliate" /><label>Solo a mi</label>
                        </p>
                        <p>
                            <input type="radio" name="afiliate" /><label>A mí y mi familia</label>
                        </p>
                        <div className="addParents__content--main_main-button" >
                            <Link to="/ChoisePlan" >
                                <Button text="Continuar" />                            
                            </Link>
                        </div>
                </div> */}
            </div>
        </section>
    </div>
    )
}
