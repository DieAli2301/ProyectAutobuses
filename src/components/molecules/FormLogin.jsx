import Header from "../atomos/Header.jsx";
import { Link } from "react-router-dom";
import "../../assets/Styles/FormLogin.css";
import {useNavigate} from 'react-router-dom'
import { useRef } from "react";

function FormLogin() {
    const navigate = useNavigate()

    const form2 = useRef()
    const handlerClick = (e) => {
        e.preventDefault()
        const formData = new FormData(form2.current);

        let uri = 'http://34.225.239.102/api/iniciar';
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                usuario: formData.get('usuario'),
                contrasenia: formData.get('contrasenia'),
            
            })
        }
        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {alert(JSON.stringify(data))});
    
        const newForm = new FormData(form2.current)
        alert('  ' + newForm.get('usuario') + '  ' + newForm.get('contrasenia'));
        navigate("/altaautobuses");
    }

   
    




    return ( 
        <>
        
        <div id="divpadre">
            <form ref={form2}>
        <Header />
            <div>
                <div><label >Username</label></div>
                <div><input type="text" name="usuario"/></div>
            </div>
            <div>
                <div><label htmlFor="">Password</label></div>
                <div><input type="password" name="contrasenia" /></div>
            </div>
            <div id="bton">
                <div><button onClick={handlerClick}>Iniciar sesion</button></div>
                <div id="colorlink"><Link to="/register">No tienes cuenta? Registrate</Link></div>
            </div>
            </form>
        </div>
        
        </>
     );
}

export default FormLogin;