import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Product } from "./styles";
import { ButtonText } from "../ButtonText";
import { AddAndRemoveItem } from "../AddAndRemoveItem";
import { Link } from "react-router-dom";

import { PiHeart, PiHeartFill, PiPencilSimple } from "react-icons/pi";

export function Card({ imageUrl, plateId, title, description, price, ...rest }){
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
                <img src={imageUrl} alt={title} />
                
                { isAdmin ?
                    <Link to={"/editplate/" + plateId}>
                        <PiPencilSimple />
                    </Link>
                :
                    <Link onClick={handleIsFavorite}>
                        {isFavorite ? <PiHeartFill /> : <PiHeart />}
                    </Link>
                }
            </Product>
            <ButtonText title={title + " >"} to={"/plate/" + plateId}/>
            <div id="description">{description}</div>
            <p id="price">{"€ " + price}</p>
            <AddAndRemoveItem btnExtists/>
        </Container>
    )
}