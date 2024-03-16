import { api } from '../../services/api';

import { Container, Cover, Slider } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { useState, useEffect } from "react";

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { Card } from "../../components/Card";

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

    // Slider
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      slideChanged(slider){
        setCurrentSlide(slider.track.details.rel)
      },
      created(){
        setLoaded(true)
      },

      loop: true,
      rtl: true,
      breakpoints:{
        "(min-width: 1024px)": {
          slides: { 
            origin: 0.5, 
            perView: 3, 
            spacing: 30, 
          },
          range: {
            min: -5,
            max: 5,
          },
        },
      },
      slides: {
        perView: 2,
        spacing: 0,
      },
    })
    
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
                <Slider>
                {   
                    Object.entries(categories).map(([category, platesInCategory]) => (
                    <div key={category}>
                        <p className='plate-category'>{category}</p>
                        <div className="navigation-wrapper">
                        {
                            
                            <div ref={sliderRef} className="keen-slider">
                            {
                                platesInCategory.map(plate =>
                                <div className="keen-slider__slide number-slide1" key={String(plate.id)}>
                                    <Card 
                                    title={plate.name}
                                    description={plate.description}
                                    price={plate.price}
                                    />
                                </div>
                                )
                            }
                            </div>  
                        }
                        
                        {loaded && instanceRef.current && (
                            <div className='arrows-slider'>
                            <Arrow 
                                left
                                onClick={(e) => 
                                e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                                }
                            />
                            </div>
                        )}
                        </div>
                    </div>
                    )
                )}
                </Slider>
            
            </main>
            
            <Footer />

        </Container>
    )
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }