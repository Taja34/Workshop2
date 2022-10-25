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
import planets from "../componentes/planets";
import Europa from "../componentes/Europa";
import Titan from "../componentes/Titan";

import Technology from "../componentes/technology";
import Spaceport from "../componentes/spaceport";
import Capsule from "../componentes/capsule";
import Launch from "../componentes/launch";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            
            <Route element={<Navbar />}>
            <Route path="/" element={<Inicio />} />
            <Route path="tecnologia" element={<Technology />}>

                <Route path="launch" element={<Launch/>}/>
                <Route path="spaceport" element={<Spaceport/>}/>
                <Route path="capsule" element={<Capsule/>}/>
            
            
             </Route>
            <Route element={<planets />}>

                        <Route path="Marte"  element={<Marte />} />

                        <Route path="Luna"  element={<Luna />} />
                        <Route path="Titan"  element={<Titan />} /><Route path="Europa"  element={<Europa />} />

                       
</Route>

                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;