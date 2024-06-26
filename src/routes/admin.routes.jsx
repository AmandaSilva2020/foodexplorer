import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Plate } from '../pages/Plate';
import { NewPlate } from '../pages/NewPlate';
import { EditPlate } from '../pages/EditPlate';
import { Order } from '../pages/Order';

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plate/:id" element={<Plate />} />
            <Route path="/newplate" element={<NewPlate />} />
            <Route path="/editplate/:id" element={<EditPlate />} />
            <Route path="/orders" element={<Order />} />

            {/* TODO Prepare Not Found page */}
            {/* <Route path="*" exact={true} element={<NotFound />} /> */} 
        </Routes>
    )
}