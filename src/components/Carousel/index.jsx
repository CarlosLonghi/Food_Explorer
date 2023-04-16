import { useState } from 'react';

import { Card } from '../Card'
import { Container, CarouselCards, CarouselCard, CarouselButtons, PrevButton, NextButton} from './styles'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

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
            key={card.title}
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

        <PrevButton 
          className='prev-button' 
          onClick={handlePrevClick}
        >
          <FiChevronLeft/> 
        </PrevButton>

        <NextButton 
          className='next-button' 
          onClick={handleNextClick}
        > 
          <FiChevronRight/> 
        </NextButton>
      </CarouselButtons>

    </Container>
  );
};
