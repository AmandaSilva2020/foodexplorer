import { useState } from "react";
import { Container } from "./styles";
import { PiList, PiReceiptLight, PiX } from "react-icons/pi";
import { ButtonText } from "../ButtonText";
import { Search } from "../Search";
import { Footer } from "../Footer";

export function Header({ quantity, ...rest }){
    const [isAdmin, setIsAdmin] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
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
                                <button>Novo prato</button>
                            </li>
                            <li>
                                <button>Sair</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </Container>
    )
}