import { Container, HeadButton, Content, Controls, Control } from "./styles";

import { BiMinus, BiPlus, BiHeart, BiPencil } from 'react-icons/bi'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function Card ({ image, title, description, price, isAdmin }) {
  return (
    <Container>
      <HeadButton>
        {
          isAdmin ? 
            <ButtonText
              icon={BiPencil}
              to='#'
            />
          :
            <ButtonText
              icon={BiHeart}
              to='#'
            />
        }
      </HeadButton>

      <Content to='/preview'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <span>{description}</span>
        <h2>{price}</h2>
      </Content>

      {
        !isAdmin &&
        <Controls>
          <Control>
            <ButtonText
              icon={BiMinus}
            />
            <strong>01</strong>
            <ButtonText
              icon={BiPlus}
            />
          </Control>

          <Button
            title='Incluir'
          /> 
        </Controls>
      }
    </Container>
  );
};

