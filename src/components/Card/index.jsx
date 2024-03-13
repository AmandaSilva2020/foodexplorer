import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Product } from "./styles";
import { ButtonText } from "../ButtonText";
import { AddAndRemoveItem } from "../AddAndRemoveItem";
import { Link } from "react-router-dom";

import { PiHeart, PiHeartFill, PiPencilSimple } from "react-icons/pi";

export function Card({ ...rest }){
    const { user } = useAuth();

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

    useEffect(() => {
        if(user.role == "admin"){
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);
    
    return(
        <Container {...rest} data-is-admin={isAdmin}>
            <Product>
                <img src="../../../src/assets/suco.png" alt="suco" />
                
                { isAdmin ?
                    <Link to="/editplate">
                        <PiPencilSimple />
                    </Link>
                :
                    <Link onClick={handleIsFavorite}>
                        {isFavorite ? <PiHeartFill /> : <PiHeart />}
                    </Link>
                }
            </Product>
            <ButtonText title="Suco de maracujá >" />
            <div id="description">Presunto de parma e rúcula em um pão com fermentação natural.</div>
            <p id="price">€ 13,97</p>
            <AddAndRemoveItem btnExtists/>
        </Container>
    )
}