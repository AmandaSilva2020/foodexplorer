import { useState } from "react";

import { Container, AddAndRemove } from "./styles";
import { Button } from "../Button";

import { PiPlus, PiMinus } from "react-icons/pi";

export function AddAndRemoveItem({btnExtists, ...rest }){
    const[orderQnty, setOrderQnty] = useState(0);
    
    function addToOrder(){
        setOrderQnty(orderQnty + 1);
    }

    function removeFromOrder(){
        setOrderQnty(orderQnty - 1);
    }

    return(
        <Container>
            <AddAndRemove>
                <button onClick={removeFromOrder}><PiMinus /></button>
                <span className="orderQnty">{orderQnty}</span>
                <button onClick={addToOrder}><PiPlus /></button>
            </AddAndRemove>

            {btnExtists ? <Button title="Incluir" /> : ""}
        </Container>
    )
}