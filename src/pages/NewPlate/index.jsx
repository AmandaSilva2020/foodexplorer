import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { PiCaretLeft } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PiUploadSimple } from "react-icons/pi";
import Creatable from 'react-select/creatable';
import { CustomStyles } from "../../styles/global";

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
        if(!name || !category || !price || !description){
            return alert("Você não preencheu todos os campos.");
        }
        
        if(newIngredient){
            return alert("Você inseriu um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
        }
        
        try {
            const formData = new FormData();
            formData.append("plateimage", plateImage); 
            formData.append("name", name);
            formData.append("category", category);
            formData.append("price", price);
            formData.append("description", description);
            
            ingredients.forEach(ingredient => {
                formData.append("ingredients[]", ingredient);
            });

            const response = await api.post("/plates", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            alert("Prato criado com sucesso!");
            navigate("/");
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
              } else {
                alert("Não foi possível cadastrar.");
              }
              console.log(error);
        }
    }

    const [categoriesOptions, setCategoriesOptions] = useState([]); 

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get(`/plates?name=`);
      const fetchedPlates = response.data.plates;

      const uniqueCategories = Array.from(new Set(fetchedPlates.map((plate) => plate.category)));

      const categoriesFormatted = uniqueCategories.map((category) => ({
        value: category,
        label: category,
      }));

      setCategoriesOptions(categoriesFormatted);
    }

    fetchCategories();
  }, []);

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
                            title={plateImageName ? plateImageName : "Selecione imagem"}
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
                            
                            <Creatable
                                placeholder="Selecione ou crie uma categoria" 
                                className="input-alike"
                                options={categoriesOptions} 
                                onChange={e => setCategory(e.value)}
                                styles={CustomStyles}
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
                                    onChange={e => setPrice(parseFloat(e.target.value))}
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
                        title="Salvar prato"
                        onClick={handleNewPlate}
                    />
                </Form>
                
            </main>
            
            <Footer />

        </Container>
    )
}