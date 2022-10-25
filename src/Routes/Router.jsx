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
import Planets from "../componentes/planets";
import Europa from "../componentes/Europa";
import Titan from "../componentes/Titan";
import Crew from "../componentes/crew/Crew";
import Commander from "../componentes/crew/Commander";
import Specialist from "../componentes/crew/Specialist";
import Engineer from "../componentes/crew/Engineer";
import Pilot from "../componentes/crew/Pilot";





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
            <Route element={<Technology />}>

                <Route path="launch" element={<Launch/>}/>
                <Route path="spaceport" element={<Spaceport/>}/>
                <Route path="capsule" element={<Capsule/>}/>
            
            
             </Route>
        
             
                   
                    <Route element={<Planets />}>

                        <Route path="Marte" element={<Marte />} />

                        <Route path="Luna" element={<Luna />} />
                        <Route path="Titan" element={<Titan />} />
                        <Route path="Europa" element={<Europa />} />


                    </Route>
                    <Route element={<Crew />}>

                        <Route path="commander" element={<Commander />} />

                        <Route path="missionspecialist" element={<Specialist />} />
                        <Route path="pilot" element={<Pilot />} />
                        <Route path="flightengineer" element={<Engineer />} />


                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;