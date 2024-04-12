import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { PiCaretLeft } from "react-icons/pi";

import { useState } from "react";
import { Payment } from "../../components/Payment";
import { PlateItem } from "../../components/PlateItem";

export function MyFavorites(){
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
                    <h2>Meus favoritos</h2>

                    <div className="items-wrapper">
                        <PlateItem 
                            hasRemoveBtn
                            isFavorite
                            url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                            plateName="Salada Radish"
                            title="Remover dos favoritos"
                        />
                        <PlateItem 
                            hasRemoveBtn
                            isFavorite
                            url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                            plateName="Salada Radish"
                            title="Remover dos favoritos"
                        />
                        <PlateItem 
                            hasRemoveBtn
                            isFavorite
                            url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                            plateName="Salada Radish"
                            title="Remover dos favoritos"
                        />
                        <PlateItem 
                            hasRemoveBtn
                            isFavorite
                            url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                            plateName="Salada Radish"
                            title="Remover dos favoritos"
                        />
                        <PlateItem 
                            hasRemoveBtn
                            isFavorite
                            url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                            plateName="Salada Radish"
                            title="Remover dos favoritos"
                        />
                        <PlateItem 
                            hasRemoveBtn
                            isFavorite
                            url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                            plateName="Salada Radish"
                            title="Remover dos favoritos"
                        />
                        <PlateItem 
                            hasRemoveBtn
                            isFavorite
                            url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                            plateName="Salada Radish"
                            title="Remover dos favoritos"
                        />
                        <PlateItem 
                            hasRemoveBtn
                            isFavorite
                            url="http://localhost:3333/files/2e6f55dec60a174a2a7e-Mask%20group-3.png"
                            plateName="Salada Radish"
                            title="Remover dos favoritos"
                        />
                    </div>

                
                </Content>


                
            </main>
            
            <Footer />

        </Container>
    )
}