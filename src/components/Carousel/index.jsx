import { useState, useRef, useEffect } from 'react';
import { Card } from '../Card';
import { Container, CarouselCards, CarouselCard, CarouselButtons, PrevButton, NextButton } from './styles';
import { FiChevronRight } from 'react-icons/fi';

export function Carousel({ section, cards }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const activeCard = wrapper.children[activeIndex];
    const offset = carouselRef.current.offsetWidth / 2 - activeCard.offsetWidth / 2 - activeCard.offsetLeft;
    wrapper.style.transform = `translateX(${offset}px)`;
  }, [activeIndex]);

  function handlePrevClick() {
    setActiveIndex((activeIndex - 1 + cards.length) % cards.length);
  }

  function handleNextClick() {
    setActiveIndex((activeIndex + 1) % cards.length);
  }

  return (
    <Container>
      <h2>{section}</h2>
      <CarouselCards ref={carouselRef}>
        <div ref={wrapperRef} style={{ display: 'flex' }}>
          {cards.map((card, index) => (
            <CarouselCard key={card.id} className={index === activeIndex ? 'active' : ''}>
              <Card image={card.image} title={card.title} description={card.description} price={card.price} />
            </CarouselCard>
          ))}
        </div>
      </CarouselCards>

      <CarouselButtons>
        <PrevButton>
          <button onClick={handlePrevClick}>
            <FiChevronRight />
          </button>
        </PrevButton>

        <NextButton>
          <button onClick={handleNextClick}>
            <FiChevronRight />
          </button>
        </NextButton>
      </CarouselButtons>
    </Container>
  );
}
