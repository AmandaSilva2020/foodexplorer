import { api } from "../../services/api";

import { Container, PlateInfo } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { PiCaretLeft, PiReceipt } from "react-icons/pi";
import { AddAndRemoveItem } from "../../components/AddAndRemoveItem";
import { Button } from "../../components/Button";

import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

import { useParams } from "react-router-dom";

export function Plate(){
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [platesSearched, setPlatesSearched] = useState([]);

    const [imageUrl, setimageUrl] = useState("");
    const params = useParams();

    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    

    useEffect(() => {
        if(user.role == "admin"){
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/plates/${params.id}`);

            const url = api.defaults.baseURL + "/files/" + response.data.plates.image;

            setimageUrl(url);
            setName(response.data.plates.name);
            setPrice(String(response.data.plates.price));
            setDescription(response.data.plates.description);


            const fetchedData = response.data.ingredients;
            const databaseIngredients = Array.from(new Set(fetchedData.map((databaseingradient) => databaseingradient.name)));
            setIngredients(databaseIngredients);

        }
        
        fetchData();
    }, [])

    return(
        <Container data-is-admin={isAdmin}>
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


                <PlateInfo>
                    <img src={imageUrl} alt="" />
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <div className="tag-wrapper">
                            {
                                ingredients.map((ingredient, index) => (
                                    <span key={index}>{ingredient}</span>
                                ))
                            }
                            
                        </div>
                        {
                            isAdmin ? 
                            <div className="plate-btn-wrapper">
                                <Button title="Editar prato" id="edit-plate" to={"/editplate/" + params.id} />
                            </div>
                            :
                            <div className="plate-btn-wrapper">
                                <AddAndRemoveItem />
                                <Button icon={PiReceipt} title={"Pedir ∙ R$ " + price} id="add-to-order" />
                            </div>
                        }
                    </div>
                </PlateInfo>
                
            </main>
            
            <Footer />

        </Container>
    )
}