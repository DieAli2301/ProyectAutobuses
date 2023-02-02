import Header from "../atomos/Header";
import '../../assets/Styles/FormRegister.css'
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FormRegister() {
    const navigate = useNavigate()

    const FormR = useRef()
    const handlerClick2 = (e) => {
        e.preventDefault();

    const formRegis= new FormData(FormR.current);

        let URI="http://34.225.239.102/api/registrar/usuario"
        let options = { //se crea un nuevo objeto
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nombre: formRegis.get('nombre'),
            usuario: formRegis.get('usuario'),
            correo: formRegis.get('correo'),
            contrasenia: formRegis.get('contrasenia')
        })

        
    } 
    
    fetch(URI,options) //get
    .then(response => response.json())
    .then(data => {
        alert(JSON.stringify(data))

        const newFormRegister = new FormData(FormR.current)
        alert(' Nombre: '+ newFormRegister.get('nombre') + '  UserName: '+ newFormRegister.get('usuario') + '  Correo: ' + newFormRegister.get('correo') + '  Password: ' + newFormRegister.get('contrasenia'));
       
        

        navigate("/altaautobuses");
    }
    );

}

    
    return ( 
        <>
        
        <div id="divgran2">
        <form ref={FormR}>
        <Header/>
            <div>
                <div><label >Name</label></div>
                <div><input type="text" name="nombre" /></div>
            </div>
            <div>
                <div><label htmlFor="">Email</label></div>
                <div><input type="Email" name="correo"/></div>
            </div>
            <div>
                <div><label htmlFor="">Username</label></div>
                <div><input type="text" name="usuario" /></div>
            </div>
            <div>
                <div><label htmlFor="">Password</label></div>
                <div><input type="password" name="contrasenia" /></div>
            </div>
            <div id="bton2">
                <div><button onClick={handlerClick2}>Registro</button></div>
                <div><Link to="/altaautobuses">Registrar Autobus</Link></div>
            </div>

            </form>
        </div>
        </>

     );
}


export default FormRegister;