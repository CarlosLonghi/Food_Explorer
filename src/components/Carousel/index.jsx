import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles"

import { Card } from '../Card'
import { Container, NavigationWrapper, PrevButton, NextButton } from './styles'

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import CardImage from '../../assets/salada-ravanello.png'
import CardImage2 from '../../assets/expresso.png'
import CardImage3 from '../../assets/macarons.png'
import CardImage4 from '../../assets/bolo-de-damasco.png'
import CardImage5 from '../../assets/salada-molla.png'


export function Carousel ({ section, isAdmin }) {

  const [cards] = useState([
    {
      id: 1,
      image: CardImage,
      title: 'Card 1',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },
    {
      id: 2,
      image: CardImage2,
      title: 'Card 2',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },
    {
      id: 3,
      image: CardImage3,
      title: 'Card 3',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },
    {
      id: 4,
      image: CardImage4,
      title: 'Card 4',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },
    {
      id: '5',
      image: CardImage5,
      title: 'Card 5',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97',
    }
  ])

  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    initial: 0,
    created() {
      setLoaded(true)
    },
    
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 3 },
      }
    },
  })

  return (
    <Container>
      <h2>{section}</h2>
      <NavigationWrapper>
        <div ref={sliderRef} className="keen-slider">

        {cards.map((card, index) => (
          <div 
            key={index}    
            className="keen-slider__slide"
          >
            <Card
              data={{
                id: card.id,
                image: card.image,
                title: card.title,
                description: card.description,
                price: card.price,
              }}
              isAdmin={isAdmin}
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
