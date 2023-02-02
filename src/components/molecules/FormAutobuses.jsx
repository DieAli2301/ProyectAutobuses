import {useRef} from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import Header from "../atomos/Header";
import '../../assets/Styles/FormAutobuses.css'

function FormAutobuses() {
    const formDataF=useRef();
    const [NumRandom,setNumRandom]=useState("")
    const handlerClick = (e) => {
        e.preventDefault();
        const formData=new FormData(formDataF.current);
        let URI="http://34.225.239.102/api/autobus/register"//default post
        console.log(formData.get('tipo'));
        let options={
            method:'POST',
            headers:{ "Content-Type":'application/json'},
            body:JSON.stringify({
                    clave:formData.get('clave'),
                    placa:formData.get('placa') ,
                    numasientos: formData.get('numasientos'),
                    fecha: formData.get('fecha'),
                    tipo: formData.get('tipo'),
                    nombre: formData.get('nombre'),
                    licencia:formData.get('licencia') 
            })
        }
        fetch(URI,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})
    };
    const handlerClickNum=(e)=>{
        e.preventDefault();
        let num=Math.floor(Math.random() * 1000 + 1000);
        setNumRandom(num)
    }

    return ( 
        <>
         
        <div id="divauto">
            <form ref={formDataF}>
        <Header/>
            <div>
                <div><label htmlFor="">Clave autobus</label></div>
                <div><input type="text" name="clave" /></div>
            </div>
            <div>
                <div><label htmlFor="">Placa autobus</label></div>
                <div><input type="text" name="placa" /></div>
           </div>

           <div>
            <div><label htmlFor="">Numero de asientos</label></div>
            <div><input type="number" name="numasientos"/></div>
           </div>
           <div>
            <div><label htmlFor="">Fecha de alta</label></div>
            <input type="Date" name="fecha" />
           </div>
           <div>
            <div><label htmlFor="">Tipo</label></div>
            <select name="tipo" id=""><option value="Lujo">Lujo</option><option value="Turismo">Turismo</option></select>
           </div>
           <div>
            <div><label htmlFor="">Nombre del chofer</label></div>
            <div><input type="text" name="nombre" /></div>
           </div>
           <div>
            <div><label htmlFor="">Numero de Licencia</label></div>
            <input type="text" name="licencia" value={NumRandom}/>
            <div id="numeroL" onClick={handlerClickNum}><button>Generar</button></div>
           </div>
           <div>
            <div><button onClick={handlerClick}>Alta de autobuses</button></div>
           </div>



           </form>
        </div>
 
        </>
     );
}

export default FormAutobuses;