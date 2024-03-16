import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Plate } from '../pages/Plate';

export function CustomerRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plate/:id" element={<Plate />} />
            
            {/* TODO Prepare Not Found page */}
            {/* <Route path="*" exact={true} element={<NotFound />} /> */} 
        </Routes>
    )
}