import { Container, Cover } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Search } from "../../components/Search";
import { ButtonText } from "../../components/ButtonText";
import { Card } from "../../components/Card";

import { PiX } from "react-icons/pi";
import { useState } from "react";

export function Home(){
    const [isAdmin, setIsAdmin] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    return(
        <Container data-menu-is-open={menuIsOpen} data-is-admin={isAdmin}>
            <Header 
                quantity="3" 
                onOpenMenu={() => setMenuIsOpen(true)}
            />

            <main>
                <Cover>
                    <img src="../../../src/assets/food.png" alt="" />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Cover>
                <Card />
            </main>

            <Footer />
            <div id="menu-overlay">
                <ButtonText 
                    icon={PiX}
                    title="Menu"
                    onClick={() => setMenuIsOpen(false)}
                />
                <Search />
                <nav>
                    <ul>
                        <li id="btn-new-dish">
                            <button>Novo prato</button>
                        </li>
                        <li>
                            <button>Sair</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}