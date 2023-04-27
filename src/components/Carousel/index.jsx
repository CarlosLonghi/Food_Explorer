import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles"

import { Card } from '../Card'
import { Container, NavigationWrapper } from './styles'

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export function Carousel ({section, cards}) {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
    },
    initial: 0,
    created() {
      setLoaded(true)
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
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <BsChevronLeft />
            </Arrow>

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            >
              <BsChevronRight />
            </Arrow>

          </>

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
