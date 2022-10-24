import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Luna from "../componentes/Luna";
import Marte from "../componentes/Marte";

import Navbar from "../componentes/Navbar";
import Inicio from "../componentes/Inicio";
import Planets from "../componentes/Planets";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            
            <Route element={<Navbar />}>
            <Route path="/" element={<Inicio />} />
            <Route element={<Planets />}>

                        <Route path="Marte"  element={<Marte />} />

                        <Route path="Luna"  element={<Luna />} />
{/* 
                        <Route path="Europa"  element={<Europa />} />
                        
                        <Route path="Titan"  element={<Titan />} /> */}
                       
</Route>

                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;