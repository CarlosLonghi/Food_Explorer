import { Container, HeadButton, Content, Controls, Control } from "./styles";

import { BiMinus, BiPlus, BiHeart, BiPencil } from 'react-icons/bi';
import { useAuth } from '../../hooks/auth';
import { USER_ROLES } from '../../utils/roles';

import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

export function Card ({ data, ...rest }) {
  const { user } = useAuth()

  return (
    <Container {...rest}>
      <HeadButton>
        {
          [USER_ROLES.ADMIN].includes(user.role) && 
          <ButtonText
            className="edit"
            icon={BiPencil}
            to={`/edit/${data.id}`}
          />
          ||
          [USER_ROLES.CUSTOMER].includes(user.role) && 
          <ButtonText
            className="fav"
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
        [USER_ROLES.CUSTOMER].includes(user.role) &&
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
            className="red darken-4 pulse"
            title='Incluir'
          /> 
        </Controls>
      }
    </Container>
  );
};

