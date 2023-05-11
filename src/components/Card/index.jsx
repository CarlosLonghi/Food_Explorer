import { Container, FavButton, Content, Controls, Control } from "./styles";

import { BiMinus, BiPlus, BiHeart } from 'react-icons/bi'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function Card ({ image, title, description, price }) {
  return (
    <Container>
      <FavButton>
        <BiHeart/>
      </FavButton>

      <Content to='/preview'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <span>{description}</span>
        <h2>{price}</h2>
      </Content>

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
    </Container>
  );
};

