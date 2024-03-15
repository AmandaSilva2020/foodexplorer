import { api } from '../../services/api';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { Container } from './styles';

import { Card } from "../Card";
import { useState, useEffect } from 'react';

export function Slider({platesSearched = []}) {
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


    const[plates, setPlates] = useState([]);
    const[platesLoaded, setPlatesLoaded] = useState(false);

    useEffect(() => {
      async function fetchPlates(){
        const response = await api.get(`/plates?name=${platesSearched}`);
        setPlates(response.data.plates);
        setPlatesLoaded(true);
      }
      
      fetchPlates();
    }, [platesSearched]);

    
  
    return (
        <Container>
            <p>Refeições</p>
            <div className="navigation-wrapper">
              {
                platesLoaded &&
                <div ref={sliderRef} className="keen-slider">
                {
                  plates.map(plate => (
                    <div className="keen-slider__slide number-slide1" key={String(plate.id)}>
                      <Card 
                        title={plate.name}
                        description={plate.description}
                        price={plate.price}
                        />
                    </div>
                  ))
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
            
        </Container>
    )
  }

  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
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