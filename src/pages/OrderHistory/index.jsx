import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";

import { PiCaretLeft } from "react-icons/pi";

import { useState } from "react";
import { Table } from "../../components/Table";

export function OrderHistory(){
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
                    <h2>Histórico de pedidos</h2>
                    <Table></Table>
                
                </Content>


                
            </main>
            
            <Footer />

        </Container>
    )
}