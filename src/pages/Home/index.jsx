import { Container, Cover } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Slider } from "../../components/Slider";

export function Home(){
    
    return(
        <Container>
            <Header 
                quantity="3" 
            />

            <main>
                <Cover>
                    <img src="../../../src/assets/food.png" alt="" />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Cover>
                <Slider />
                <Slider />
                <Slider />
            
            </main>
            
            <Footer />

        </Container>
    )
}