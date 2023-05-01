import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles"

import { Card } from '../Card'
import { Container, NavigationWrapper, PrevButton, NextButton } from './styles'

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export function Carousel ({section, cards}) {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    initial: 0,

    created() {
      setLoaded(true)
    },
    
    breakpoints: {
      "(min-width: 1000px)": {
        slides: { perView: 1 },
      },
      "(min-width: 1620px)": {
        slides: { perView: 3 },
      },
    },
  })

  return (
    <Container>
      <h2>{section}</h2>
      <NavigationWrapper>
        <div ref={sliderRef} className="keen-slider">

        {cards.map((card, index) => (
          <div key={index} className="keen-slider__slide">
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
            />
          </div>
        ))}

        </div>
        {loaded && instanceRef.current && (
          <div className="controls">
            <PrevButton>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
            </PrevButton>          

            <NextButton>
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </NextButton>
          </div>
        )}
      </NavigationWrapper>

    </Container>
  )
}

function Arrow(props) {
  const Icon = props.left ? BsChevronLeft : BsChevronRight;
  return (
    <button
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      }`}
      disabled={props.disabled}
    >
      <Icon />
    </button>
  );
}
