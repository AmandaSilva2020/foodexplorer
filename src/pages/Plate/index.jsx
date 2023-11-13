import { Container, PlateInfo } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { PiCaretLeft, PiReceipt } from "react-icons/pi";
import { AddAndRemoveItem } from "../../components/AddAndRemoveItem";
import { Button } from "../../components/Button";

import { useState } from "react";

export function Plate(){
    const [isAdmin, setIsAdmin] = useState(false);

    return(
        <Container data-is-admin={isAdmin}>
            <Header 
                quantity="3" 
            />

            <main>
                <ButtonText 
                    icon={PiCaretLeft}
                    title="Voltar"
                />


                <PlateInfo>
                    <img src="../../../src/assets/suco.png" alt="" />
                    <div>
                        <h2>Salada Ravanello</h2>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                        <div className="tag-wrapper">
                            <span>alface</span>
                            <span>cebola</span>
                            <span>pão naan</span>
                            <span>pepino</span>
                            <span>rabanete</span>
                            <span>tomate</span>
                        </div>
                        {
                            isAdmin ? 
                            <div className="plate-btn-wrapper">
                                <Button title="Editar prato"/>
                            </div>
                            :
                            <div className="plate-btn-wrapper">
                                <AddAndRemoveItem />
                                <Button icon={PiReceipt} title="pedir ∙ R$ 25,00"/>
                            </div>
                        }
                    </div>
                </PlateInfo>
                
            </main>
            
            <Footer />

        </Container>
    )
}