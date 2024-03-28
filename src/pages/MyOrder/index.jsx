import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { PiCaretLeft } from "react-icons/pi";

import { useState } from "react";
import { Payment } from "../../components/Payment";
import { PlateItem } from "../../components/PlateItem";

export function MyOrder(){
    const [platesSearched, setPlatesSearched] = useState([]);

    return(
        <Container>
            <Header 
                quantity="3" 
                setPlatesSearched={setPlatesSearched}
            />

            <main>
                <ButtonText 
                    icon={PiCaretLeft}
                    title="Voltar"
                    to="/"
                />

                <Content>
                    <div className="col-1">
                        <h2>Meu Pedido</h2>

                        <div className="items-wrapper">
                            <PlateItem 
                                qnty="3"
                                itemTotal="32,00"
                                url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                                plateName="Salada Radish"
                                title="Remover do pedido"
                            />
                            <PlateItem 
                                qnty="2"
                                itemTotal="16,00"
                                url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                                plateName="Salada Radish"
                                title="Remover do pedido"
                            />
                            <PlateItem 
                                isFavorite
                                url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                                plateName="Salada Radish"
                                title="Remover dos favoritos"
                            />
                        </div>

                        <p className="total-wrapper">Total: € 103,88</p>

                    </div>
                
                    <div className="col-1">
                        <div className="placeOrderBtnWrapper">
                            <Button 
                                title="Avançar" 
                                className="placeOrderBtn"
                            />
                        </div>
                        <Payment className="payment" />
                    </div>
                </Content>


                
            </main>
            
            <Footer />

        </Container>
    )
}