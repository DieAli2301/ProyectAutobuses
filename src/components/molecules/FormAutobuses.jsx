import Header from "../atomos/Header";
import '../../assets/Styles/FormAutobuses.css'

function FormAutobuses() {
    return ( 
        <>
        <Header/>
        <div id="divauto">
            <div id="divchild">
                <div><label htmlFor="">Clave autobus</label></div>
                <div><input type="text" /></div>
            </div>
            <div>
                <div><label htmlFor="">Placa autobus</label></div>
                <div><input type="text" /></div>
           </div>



           
        </div>
 
        </>
     );
}

export default FormAutobuses;