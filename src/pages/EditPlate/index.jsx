import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { PiCaretLeft } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";

import { PiUploadSimple } from "react-icons/pi";
import Creatable from 'react-select/creatable';

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditPlate(){
    const [data, setData] = useState(null);
    const [dataIngredients, setDataIngredients] = useState([])
    const params = useParams();
    
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
        setDataIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleEditPlate(){
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
        async function fetchData(){
            const response = await api.get(`/plates/${params.id}`);
            setData(response.data);

            const fetchedData = response.data.ingredients;
            const databaseIngredients = Array.from(new Set(fetchedData.map((databaseingradient) => databaseingradient.name)));
            setDataIngredients(databaseIngredients);

        }
        
        fetchData();
    }, [])
    
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

                <h2>Editar Prato</h2>

                { data &&
                <Form>
                <div className="input-wrapper">
                        <Input 
                            label 
                            labelName="Imagem do prato" 
                            icon={PiUploadSimple}
                            type= "file"
                            id="plate-image"
                            hidden
                            title={plateImageName ? plateImageName : data.plates.image}
                            onChange={handleInsertPlateImage}
                        />

                        <Input 
                            label
                            labelName="Nome"
                            defaultValue={data.plates.name}
                            type="text"
                            id="plate-name"
                            onChange={e => setName(e.target.value)}
                        />

                        <label htmlFor="plate-category" id="select-wrapper"> 
                            Categoria
                            
                            <Creatable
                                placeholder={data.plates.category}
                                className="input-alike"
                                options={categoriesOptions} 
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
                                    singleValue: (baseStyles) => ({
                                        ...baseStyles,
                                        color: "#fff",
                                    }),
                                    input: (baseStyles) => ({
                                        ...baseStyles,
                                        color: "#fff",
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
                                    data.ingredients && 
                                    dataIngredients.map((dataIngredient, index) => (
                                        <Tag
                                            key={String(index)}
                                            value={dataIngredient}
                                            onClick={() => handleRemoveIngredient(dataIngredient)}
                                        />
                                    ))
                                }
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
                                    defaultValue={data.plates.price}
                                    onChange={e => setPrice(parseFloat(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <span>Descrição</span>
                        <textarea 
                            defaultValue={data.plates.description}
                            onChange={e => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="button-wrapper">
                        <button className="delete-plate">Excluir prato</button>
                        
                        <Button 
                            title="Salvar alterações"
                            onClick={handleEditPlate}
                        />
                    </div>
                </Form>
                }
                
            </main>
            
            <Footer />

        </Container>
    )
}