import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { PiCaretLeft } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";

import { PiUploadSimple } from "react-icons/pi";
import Select from 'react-select';

const options = [
    { value: 'refeicao', label: 'Refeição' },
    { value: 'prato-principal', label: 'Prato principal' },
    { value: 'sobremesa', label: 'Sobremesa' },
  ]

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
                    to="/"
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
                            id="plate-name"
                        />

                        <label htmlFor="plate-category" id="select-wrapper"> 
                            Categoria
                            
                            <Select 
                                className="input-alike"
                                options={options} 
                                styles={{
                                    control: (baseStyles, state) => ({
                                      ...baseStyles,
                                      border: state.isFocused ? 'none' : 'none',
                                      backgroundColor: '#0D1D25',
                                      height: '4.8rem',
                                    }),
                                    menu:(baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: '#0D1D25',
                                      }),
                                    option: (baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: state.isFocused ? '#192227' : '#0D1D25',
                                      }),
                                  }}
                            />
                        </label>

                    </div>

                    <div className="content-wrapper">
                        <div className="content">
                            <span>Ingredientes</span>
                            <div className="tag-wrapper">
                                <Tag 
                                    value="Pão Naan"
                                />
                                <Tag 
                                    value="Pão Naan"
                                />
                                <Tag 
                                    value="Pão Naan"
                                />
                                
                                <Tag 
                                    isnew
                                />
                            </div>
                        </div>
                        <div className="content second-content">
                            <span>Preço</span>
                            <div className="price">
                                <span>€</span>
                                <input 
                                    type="text" 
                                    placeholder="00,00"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <span>Descrição</span>
                        <textarea 
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            
                        ></textarea>
                    </div>

                    <Button 
                        title="Salvar alterações"
                    />
                </Form>
                
            </main>
            
            <Footer />

        </Container>
    )
}