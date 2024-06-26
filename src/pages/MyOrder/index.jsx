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
    const [orderReady, setOrderReady] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState("Beginning");

    function handlePayment(){
        setOrderReady(!orderReady);
    }

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

                <Content data-is-order-ready={orderReady}>
                    <div className="col-1 my-order">
                        <h2>Meu Pedido</h2>

                        <div className="items-wrapper">
                            <PlateItem 
                                qnty="3"
                                itemTotal="32,00"
                                url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                                plateName="Salada Radish"
                                hasRemoveBtn={paymentStatus === "Done" ? false : true}
                                title="Remover do pedido"
                            />
                        </div>

                        <p className="total-wrapper">Total: € 32,00</p>

                    </div>
                
                    <div className="col-1 payment-wrapper">
                        <div className="placeOrderBtnWrapper">
                            <Button 
                                title="Avançar" 
                                className="placeOrderBtn"
                                onClick={handlePayment}
                            />
                        </div>
                        <Payment className="payment" />
                        <div className="placeOrderBtnWrapper">
                            <Button 
                                title="Rever pedido" 
                                className="reviewOrderBtn"
                                onClick={handlePayment}
                            />
                        </div>
                    </div>
                </Content>


                
            </main>
            
            <Footer />

        </Container>
    )
}