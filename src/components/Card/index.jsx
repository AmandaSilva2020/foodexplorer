import { useState } from "react";

import { Container, Product } from "./styles";
import { ButtonText } from "../ButtonText";
import { AddAndRemoveItem } from "../AddAndRemoveItem";

import { PiHeart, PiHeartFill, PiPencilSimple } from "react-icons/pi";

export function Card({ ...rest }){
    const [isFavorite, setIsFavorite] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    function handleIsFavorite(){
        if(isFavorite){
            setIsFavorite(false);
        } else {
            setIsFavorite(true);
        }
        return;
    }
    return(
        <Container {...rest} data-is-admin={isAdmin}>
            <Product>
                <img src="../../../src/assets/suco.png" alt="suco" />
                
                { isAdmin ?
                    <button>
                        <PiPencilSimple />
                    </button>
                :
                    <button onClick={handleIsFavorite}>
                        {isFavorite ? <PiHeartFill /> : <PiHeart />}
                    </button>
                }
            </Product>
            <ButtonText title="Suco de maracujá >" />
            <div id="description">Presunto de parma e rúcula em um pão com fermentação natural.</div>
            <p id="price">€ 13,97</p>
            <AddAndRemoveItem btnExtists/>
        </Container>
    )
}