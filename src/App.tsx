import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Home } from '../src/Pages/Home';
import  {Information}  from './Pages/Information';
import { Plan } from '../src/Pages/Plan';
import { Thanks } from '../src/Pages/Thanks';
function App() {
  
const [user, setUser] = React.useState<User>() 
const [userData, setUserData] = React.useState<UserData>() 


interface User {
  dni:string;
  date:string;
  phone:string;
}
interface UserData {
  dni:string;
  date:string;
  nombre:string;
  apellidoPaterno:string;
  apellidoMaterno:string;
  sexo:string
}
const handlerForm = (dni:string, date:string, telf:string) =>{ //hanfler para obtener los datos en el formulario
  setUser({
    dni:dni,
    date:date,
    phone:telf
  })  
  
}

const getDataUser = () => {   
  fetch('https://freestyle.getsandbox.com/dummy/obtenerdatospersona',{
    method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin',      
  })
  .then(response => response.json())
  .then(data => setUserData(data.data.tercero))  
}


return (
    <React.StrictMode>
      <BrowserRouter>        
          <Switch>
            <Route  exact path="/" component={ () => ( <Home handlerForm={handlerForm} />)} />
            <Route  exact path="/information" component={ ()=> (<Information userForm={userData} />) }/>
            <Route  exact path="/plain" component={ Plan }/>
            <Route  exact path="/thanks" component={ Thanks }/>
        </Switch>        
      </BrowserRouter> 
  </React.StrictMode>
  );
}

export default App;
