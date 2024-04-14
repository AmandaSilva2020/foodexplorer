import { useAuth } from "../../hooks/auth";
import { Link, useNavigate} from 'react-router-dom';

import { useState, useEffect } from "react";
import { Container } from "./styles";
import { PiList, PiReceiptLight, PiX, PiSignOut } from "react-icons/pi";
import { ButtonText } from "../ButtonText";
import { Search } from "../Search";
import { Footer } from "../Footer";
import { Button } from "../Button";
import logo_food_explorer from "/src/assets/logo_food_explorer.png";

export function Header({ setPlatesSearched, quantity, ...rest }){
    const { signOut, user } = useAuth();
    const navigation = useNavigate();

    const [isAdmin, setIsAdmin] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [search, setSearch] = useState([]);

    let pedidos = 2;

    function handleSignOut(){
        navigation("/");
        signOut();
    }

    function handleBackToHome(){
        setPlatesSearched([]);
    }

    useEffect(() => {
        setIsAdmin(user.role === "admin");
    }, [user.role]);

    useEffect(() => {
        setPlatesSearched(search)
    }, [search, setPlatesSearched])
    
    return(
        <Container data-menu-is-open={menuIsOpen} data-is-admin={isAdmin}>
            <nav>
                <button onClick={() => setMenuIsOpen(true)} id="menu-hamb">
                    <PiList />
                </button>
                <Link className="logo-role" onClick={handleBackToHome} to="/" >
                    <img src={logo_food_explorer} alt="Food explorer logo" />
                    <span>admin</span>
                </Link>
                
                <Link id="shop-list" to="/myorder" >
                    <PiReceiptLight />
                    <div className="menu-qnt">
                        <span>{quantity}</span>
                    </div>
                </Link>

                <div className="menu-desktop">
                    <Search 
                        onClick={(value) => setSearch(value)}
                    />
                    <div className="client-wrapper">
                        {  
                            isAdmin ?
                            <>
                                <div>
                                    <ButtonText 
                                        title= "Pedidos"
                                        className="client-btn adm-btn"
                                        to= "/orders"
                                    />
                                    <Button 
                                        title= "Novo prato"
                                        className="novoprato"
                                        to= "/newplate"
                                    />
                                </div>
                            </>
                            :
                            <>
                            <div>
                                <ButtonText 
                                    title= "Meus favoritos"
                                    className="client-btn"
                                    to= "/myfavorites"
                                />
                                <ButtonText 
                                    title= "Histórico de pedidos"
                                    className="client-btn"
                                    to="/orderhistory"
                                />
                                <Button 
                                    icon={PiReceiptLight}
                                    title= "Pedidos (0)"
                                    to="/myorder"
                                />
                            </div>
                            
                            </>
                        }
                    </div>
                    <button onClick={handleSignOut}>
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
                    <Search 
                        onClick={(value) => setSearch(value)}
                    />
                    <div className="menu-btn-wrapper">
                        <ul>
                            <li class="btn-admin">
                                <Link to="/newplate">Novo prato</Link>
                            </li>
                            <li class="btn-admin">
                                <Link to="/orders">Pedidos</Link>
                            </li>
                            <li id="btn-my-favorites">
                                <Link to="/myfavorites">Meus favoritos</Link>
                            </li>
                            <li id="btn-order-history">
                                <Link to="/orderhistory">Histórico de pedidos</Link>
                            </li>
                            <li>
                                <button onClick={handleSignOut}>Sair</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </Container>
    )
}