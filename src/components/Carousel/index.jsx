import { useState } from 'react';

import { Card } from '../Card'
import { Container, CarouselCards, CarouselCard, CarouselButtons, PrevButton, NextButton } from './styles'

import { FiChevronRight } from 'react-icons/fi'

import { ButtonText } from '../ButtonText'

export function Carousel({ section, cards }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handlePrevClick() {
    setActiveIndex((activeIndex - 1 + cards.length) % cards.length);
  };

  function handleNextClick() {
    setActiveIndex((activeIndex + 1) % cards.length);
  };

  return (
    <Container>
      <h2>{section}</h2>
      <CarouselCards>
        {cards.map((card, index) => (
          <CarouselCard
            key={card.id}
            className={index === activeIndex ? 'active' : ''}
            >
            <Card 
              image={card.image} 
              title={card.title} 
              description={card.description}
              price={card.price}
            />
          </CarouselCard>
        ))}
      </CarouselCards>

      <CarouselButtons>

        <PrevButton>
          <button
            onClick={handlePrevClick}
          >
            <FiChevronRight/>
          </button>
        </PrevButton>

        <NextButton>
          <button
            onClick={handleNextClick}
          >
            <FiChevronRight/>
          </button>
        </NextButton>

      </CarouselButtons>

    </Container>
  );
};
