import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Plate } from '../pages/Plate';
import { NewPlate } from '../pages/NewPlate';
import { EditPlate } from '../pages/EditPlate';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plate" element={<Plate />} />
            <Route path="/newplate" element={<NewPlate />} />
            <Route path="/editplate" element={<EditPlate />} />
        </Routes>
    )
}