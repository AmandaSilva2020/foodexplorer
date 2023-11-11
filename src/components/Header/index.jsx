import { useState } from "react";
import { Container } from "./styles";
import { PiList, PiReceiptLight } from "react-icons/pi";

export function Header({ onOpenMenu, quantity, ...rest }){
    const [isAdmin, setIsAdmin] = useState(false);
    
    return(
        <Container data-is-admin={isAdmin}>
            <nav>
                <button onClick={onOpenMenu} id="menu-hamb">
                    <PiList />
                </button>
                <div className="logo-role">
                    <img src="../../../public/logo_food_explorer.png" alt="Food explorer logo" />
                    <span>admin</span>
                </div>
                <button id="shop-list">
                    <PiReceiptLight />
                    <div>
                        <span>{quantity}</span>
                    </div>
                </button>
            </nav>
        </Container>
    )
}