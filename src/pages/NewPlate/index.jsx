import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { PiCaretLeft } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PiUploadSimple } from "react-icons/pi";
import Select from 'react-select';

const options = [
    { value: 'refeicao', label: 'Refeição' },
    { value: 'prato-principal', label: 'Prato principal' },
    { value: 'sobremesa', label: 'Sobremesa' },
  ]

export function NewPlate(){
    const [platesSearched, setPlatesSearched] = useState([]);

    const [plateImage, setPlateImage] = useState(null);
    const [plateImageName, setPlateImageName] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate()

    function handleInsertPlateImage(event){
        const file = event.target.files[0];
        setPlateImage(file);
        setPlateImageName(file.name);
    }


    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleNewPlate(){
        await api.post("/plates", {
            name,
            category,
            price,
            description,
            ingredients
        });

        alert("Prato criado com sucesso!");
        navigate("/");
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
                            title={plateImageName ? plateImageName :"Selecione imagem"}
                            onChange={handleInsertPlateImage}
                        />

                        <Input 
                            label
                            labelName="Nome"
                            placeholder="Ex.: Salada Ceasar"
                            type="text"
                            id="plate-name"
                            onChange={e => setName(e.target.value)}
                        />

                        <label htmlFor="plate-category" id="select-wrapper"> 
                            Categoria
                            
                            <Select 
                                className="input-alike"
                                options={options} 
                                onChange={e => setCategory(e.value)}
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
                                    singleValue: (baseStyles, state) => ({
                                        ...baseStyles,
                                        color: "#7C7C8A",
                                    })
                                  }}
                            />
                        </label>

                    </div>

                    <div className="content-wrapper">
                        <div className="content">
                            <span>Ingredientes</span>
                            <div className="tag-wrapper">
                                {
                                    ingredients.map((ingredient, index) => (
                                        <Tag
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }
                                <Tag
                                    isnew
                                    placeholder="Adicionar" 
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
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
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <span>Descrição</span>
                        <textarea 
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
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