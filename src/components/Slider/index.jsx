import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { Container } from './styles';

import { Card } from "../Card";

export function Slider() {
    const [sliderRef] = useKeenSlider({
      loop: true,
      mode: "free",
      slides: {
        perView: 6,
        spacing: 12,
      },
    })
  
    return (
        <Container>
            <p>Refeições</p>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><Card /></div>
                <div className="keen-slider__slide number-slide2"><Card /></div>
                <div className="keen-slider__slide number-slide3"><Card /></div>
                <div className="keen-slider__slide number-slide4"><Card /></div>
                <div className="keen-slider__slide number-slide5"><Card /></div>
                <div className="keen-slider__slide number-slide6"><Card /></div>
                <div className="keen-slider__slide number-slide6"><Card /></div>
            </div>
        </Container>
    )
  }