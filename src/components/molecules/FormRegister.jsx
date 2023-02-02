import Header from "../atomos/Header";
import '../../assets/Styles/FormRegister.css'
import { Link } from "react-router-dom";

function FormRegister() {
    return ( 
        <>
        <Header/>
        <div id="divgran2">
            <div>
                <div><label >Name</label></div>
                <div><input type="text" /></div>
            </div>
            <div>
                <div><label htmlFor="">Email</label></div>
                <div><input type="Email" /></div>
            </div>
            <div>
                <div><label htmlFor="">Username</label></div>
                <div><input type="text" /></div>
            </div>
            <div>
                <div><label htmlFor="">Password</label></div>
                <div><input type="password" /></div>
            </div>
            <div id="bton2">
                <div><button>Registro</button></div>
                <div><Link to="/altaautobuses">Registrar Autobus</Link></div>
            </div>
            
        </div>
        </>

     );
}

export default FormRegister;