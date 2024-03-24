import { useState, useEffect } from "react";

import { Container, AddAndRemove } from "./styles";
import { Button } from "../Button";

import { PiPlus, PiMinus } from "react-icons/pi";

export function AddAndRemoveItem({ setFinalOrderQnty, btnExtists, ...rest }){
    const[orderQnty, setOrderQnty] = useState(0);
    
    function addToOrder(){
        setOrderQnty(orderQnty + 1);
    }

    function removeFromOrder(){
        if(orderQnty > 0) {
            setOrderQnty(orderQnty - 1);
        }
    }

    useEffect(() => {
        setFinalOrderQnty(orderQnty);
    }, [orderQnty, setFinalOrderQnty])
    

    return(
        <Container>
            <AddAndRemove>
                <button onClick={removeFromOrder}><PiMinus /></button>
                <span className="orderQnty">{orderQnty.toString().padStart(2, "0")}</span>
                <button onClick={addToOrder}><PiPlus /></button>
            </AddAndRemove>

            {btnExtists ? <Button title="Incluir" /> : ""}
        </Container>
    )
}