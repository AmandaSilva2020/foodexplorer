import { useState } from "react";
import { Container, PaymentSelector, CreditForm } from "./styles";

import { PiCreditCard, PiPaypalLogo, PiClock, PiCheckCircle, PiForkKnife } from "react-icons/pi";
import { Button } from "../Button";

export function Payment({...rest}){
    const [selectPaymentMethod, setSelectPaymentMethod] = useState("PayPal");
    const [paymentStatus, setPaymentStatus] = useState("Beginning");

    function toggleSelect(paymentMethod){
        setSelectPaymentMethod(paymentMethod);
    }

    function PaymentCurrentState(status){
        setPaymentStatus(status);
    }

    return(
        <Container {...rest}>
            <h2>Pagamento</h2>

            <PaymentSelector>
                <div className="table-title">
                    <div className={`table-cel cel-title ${selectPaymentMethod === 'PayPal' ? 'selected' : ''}`} onClick={() => toggleSelect('PayPal')}>
                        <PiPaypalLogo />
                        <p>PayPal</p>
                    </div>
                    <div className={`table-cel cel-title ${selectPaymentMethod === 'Crédito' ? 'selected' : ''}`} onClick={() => toggleSelect('Crédito')}>
                        <PiCreditCard />
                        <p>Crédito</p>
                    </div>
                </div>
                <div className="table-content">
                    <div className={`table-cel cel-content ${selectPaymentMethod === 'Crédito' ? 'hide' : ''}`}>
                        <img src="../../../public/qrcode.svg" alt="" />
                    </div>
                    <div className={`table-cel cel-content ${selectPaymentMethod === 'PayPal' ? 'hide' : ''}`}>
                        <div className="credit-payment">
                            <CreditForm className={`${paymentStatus === 'Beginning' ? '' : 'hide'}`}>
                                <label htmlFor="card-number">
                                    Número do cartão

                                    <input type="text" placeholder="0000 0000 0000 0000" id="card-number" />
                                </label>

                                <div className="input-wrapper">
                                    <label htmlFor="card-date">
                                        Validade

                                        <input type="date" placeholder="04/25" id="card-date" />
                                    </label>
                                    <label htmlFor="card-cvc">
                                        CVC

                                        <input type="text" placeholder="000" id="card-cvc" />
                                    </label>
                                </div>

                                <Button 
                                    title="Finalizar pagamento"
                                    onClick={() => PaymentCurrentState('Loading')}
                                />

                            </CreditForm>

                            <div className={`${paymentStatus === 'Loading' ? 'loading' : 'hide'}`}>
                                <PiClock />
                                <p>Aguardando Pagamento</p>
                            </div>
                            
                            <div className={`${paymentStatus === 'Done' ? 'done' : 'hide'}`}>
                                <PiCheckCircle />
                                <p>Pagamento aprovado!</p>
                            </div>
                            
                            <div className={`${paymentStatus === 'Delivered' ? 'delivered' : 'hide'}`}>
                                <PiForkKnife />
                                <p>Pedido entregue!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </PaymentSelector>
        </Container>
    )
}