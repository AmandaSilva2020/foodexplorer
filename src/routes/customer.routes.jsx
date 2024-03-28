import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Plate } from '../pages/Plate';
import { MyOrder } from "../pages/MyOrder";
import { MyFavorites } from "../pages/MyFavorites";
import { OrderHistory } from "../pages/OrderHistory";

export function CustomerRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plate/:id" element={<Plate />} />
            <Route path="/myorder" element={<MyOrder />} />
            <Route path="/myfavorites" element={<MyFavorites />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            
            {/* TODO Prepare Not Found page */}
            {/* <Route path="*" exact={true} element={<NotFound />} /> */} 
        </Routes>
    )
}