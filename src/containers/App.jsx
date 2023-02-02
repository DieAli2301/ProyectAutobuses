import { BrowserRouter, Routes, Route } from "react-router-dom";
import AltaAutobuses from "../pages/AltaAutobuses";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App() {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/altaautobuses" element={<AltaAutobuses/>}/>
        </Routes>
        </BrowserRouter>
        </>
     );
}

export default App;