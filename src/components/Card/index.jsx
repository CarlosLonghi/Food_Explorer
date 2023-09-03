import { Container, HeadButton, Content, Controls, Control } from "./styles";

import { BiMinus, BiPlus, BiHeart, BiPencil } from 'react-icons/bi'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

export function Card ({ data, isAdmin, ...rest }) {
  return (
    <Container {...rest}>
      <HeadButton>
        {
          isAdmin ? 
            <ButtonText
              icon={BiPencil}
              to={`/edit/${data.id}`}
            />
          :
            <ButtonText
              icon={BiHeart}
              to='#'
            />
        }
      </HeadButton>

      <Content to={`/preview/${data.id}`}>
        <img src={data.image} alt={data.title} />
        <h3>{data.title}</h3>
        <span>{data.description}</span>
        <h2>{data.price}</h2>
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

