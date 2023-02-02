import Header from "../atomos/Header.jsx";
import { Link } from "react-router-dom";
import "../../assets/Styles/FormLogin.css";

function FormLogin() {
    return ( 
        <>
        <Header />
        <div id="divpadre">
            <div>
                <div><label >Username</label></div>
                <div><input type="text" /></div>
            </div>
            <div>
                <div><label htmlFor="">Password</label></div>
                <div><input type="password" /></div>
            </div>
            <div id="bton">
                <div><button>Iniciar sesion</button></div>
                <div><Link to="/register">No tienes cuenta? Registrate</Link></div>
            </div>
        </div>
        
        </>
     );
}

export default FormLogin;