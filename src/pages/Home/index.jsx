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

// function Arrow(props) {
//     const disabled = props.disabled ? " arrow--disabled" : ""
//     return (
//       <svg
//         onClick={props.onClick}
//         className={`arrow ${
//           props.left ? "arrow--left" : "arrow--right"
//         } ${disabled}`}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//       >
//         {props.left && (
//           <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//         )}
//         {!props.left && (
//           <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//         )}
//       </svg>
//     )
//   }