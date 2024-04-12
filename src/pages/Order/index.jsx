import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Table } from "../../components/Table";

import { PiCaretLeft } from "react-icons/pi";

import { useState } from "react";

export function Order(){
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
                    <h2>Pedidos</h2>

                    <Table isBtn></Table>
                </Content>


                
            </main>
            
            <Footer />

        </Container>
    )
}