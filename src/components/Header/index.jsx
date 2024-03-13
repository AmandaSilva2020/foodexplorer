import { useAuth } from "../../hooks/auth";

import { useState, useEffect } from "react";
import { Container } from "./styles";
import { PiList, PiReceiptLight, PiX, PiSignOut } from "react-icons/pi";
import { ButtonText } from "../ButtonText";
import { Search } from "../Search";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { Link } from 'react-router-dom';

export function Header({ quantity, ...rest }){
    const { signOut, user } = useAuth();

    const [isAdmin, setIsAdmin] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    let pedidos = 2;

    useEffect(() => {
        if(user.role == "admin"){
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);
    
    return(
        <Container data-menu-is-open={menuIsOpen} data-is-admin={isAdmin}>
            <nav>
                <button onClick={() => setMenuIsOpen(true)} id="menu-hamb">
                    <PiList />
                </button>
                <div className="logo-role">
                    <img src="../../../public/logo_food_explorer.png" alt="Food explorer logo" />
                    <span>admin</span>
                </div>
                
                <button id="shop-list">
                    <PiReceiptLight />
                    <div className="menu-qnt">
                        <span>{quantity}</span>
                    </div>
                </button>

                <div className="menu-desktop">
                    <Search />
                    <div id="order">
                        {  
                            isAdmin ?
                            <Button 
                                title= "Novo prato"
                                to= "/newplate"
                            /> :
                            <Button 
                                icon={PiReceiptLight}
                                title= "Pedidos (0)"
                            />
                        }
                    </div>
                    <button onClick={signOut}>
                        <PiSignOut />
                    </button>
                </div>
            </nav>
            <div id="menu-overlay">
                <div>
                    <ButtonText 
                        icon={PiX}
                        title="Menu"
                        onClick={() => setMenuIsOpen(false)}
                    />
                    <Search />
                    <div className="menu-btn-wrapper">
                        <ul>
                            <li id="btn-new-dish">
                                <Link to="/newplate" >Novo prato</Link>
                            </li>
                            <li>
                                <button onClick={signOut}>Sair</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </Container>
    )
}