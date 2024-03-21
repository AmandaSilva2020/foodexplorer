import { api } from '../../services/api';

import { Container, Cover, SliderWrapper} from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from '../../components/Slider';

import { useState, useEffect } from "react";

export function Home(){
    const [platesSearched, setPlatesSearched] = useState([]);

    const[plates, setPlates] = useState([]);
    
    const[categories, setCategories] = useState({});

    useEffect(() => {
      async function fetchPlates(){
        const response = await api.get(`/plates?name=${platesSearched}`);
        const fetchedPlates = response.data.plates;
        
        const groupedByCategory = fetchedPlates.reduce((acc, plate) => {
          // Agrupando pratos por categoria
          if (!acc[plate.category]) {
            acc[plate.category] = [];
          }
          acc[plate.category].push(plate);
          return acc;
        }, {});
    
        setPlates(fetchedPlates);
        setCategories(groupedByCategory);
      }
      
      fetchPlates();
    }, [platesSearched]);
    
    return(
        <Container>
            <Header 
                quantity="3" 
                setPlatesSearched={setPlatesSearched}
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
                <SliderWrapper>
                {
                  Object.entries(categories).map(([category, platesInCategory]) => (
                    <div key={category}>
                      <p className='plate-category'>{category}</p>
                      <Slider platesInCategory={platesInCategory} />
                    </div>
                  ))
                }
                </SliderWrapper>
            
            </main>
            
            <Footer />

        </Container>
    )
}