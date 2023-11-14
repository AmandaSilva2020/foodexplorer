import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { PiCaretLeft, PiReceipt } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { PiUploadSimple } from "react-icons/pi";

export function NewPlate(){

    return(
        <Container>
            <Header 
                quantity="3" 
            />

            <main>
                <ButtonText 
                    icon={PiCaretLeft}
                    title="Voltar"
                />

                <h2>Novo Prato</h2>

                <Form>
                    <div className="input-wrapper">
                        <Input 
                            label 
                            labelName="Imagem do prato" 
                            icon={PiUploadSimple}
                            type= "file"
                            id="plate-image"
                            hidden
                            title="Selecione imagem"
                        />

                        <Input 
                            label
                            labelName="Nome"
                            placeholder="Ex.: Salada Ceasar"
                            type="text"
                        />

                        <label htmlFor="plate-category"> 
                            Categoria
                            

                        </label>

                    </div>
                </Form>
                
            </main>
            
            <Footer />

        </Container>
    )
}