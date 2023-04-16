import { Container, Details, Price, Controls, Control } from "./styles";

import { BiMinus, BiPlus } from 'react-icons/bi'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function Card ({ image, title, description, price }) {
  return (
    <Container>
      <Details>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <span>{description}</span>
      </Details>

      <Price>{price}</Price>

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

