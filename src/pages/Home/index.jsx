import { Container, Cover } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Slider } from "../../components/Slider";
import { useState } from "react";

export function Home(){
    const [platesSearched, setPlatesSearched] = useState([]);

    
    return(
        <Container>
            <Header 
                quantity="3" 
                setPlatesSearched = {setPlatesSearched}
            />

            <main>
                <Cover>
                    <div id="cover-img">
                        <img src="../../../src/assets/food.png" alt="" />
                    </div>
                    <div className="cover-text">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Cover>
                <Slider 
                    platesSearched = {platesSearched}
                />
            
            </main>
            
            <Footer />

        </Container>
    )
}