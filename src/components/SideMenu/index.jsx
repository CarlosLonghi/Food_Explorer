import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { USER_ROLES } from '../../utils/roles';

import { Container, Title, Header, Content, Search, Nav, Footer, Button } from "./styles";
import { FiSearch, FiLogOut, FiX } from 'react-icons/fi';
import { TbReceipt, TbPlus } from 'react-icons/tb';
import { ButtonText } from '../ButtonText'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate();

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>
          Menu
        </Title>

        <Button onClick={onCloseMenu}>
          <FiX />
        </Button>
      </Header>

      <Content>
        <Search>
          <FiSearch />
          <input 
            type="text" 
            placeholder='Busque por pratos ou ingredientes'
          />
        </Search>

        <Nav>
          {
            [USER_ROLES.ADMIN].includes(user.role) &&
            <a onClick={() => navigate('/new')} data-menu-active="true">
              <TbPlus /> Novo Prato
            </a>
          }
          {  
            [USER_ROLES.CUSTOMER].includes(user.role) &&
            <a onClick={() => navigate('#')}>
              <TbReceipt /> Pedidos
            </a>
          }
        </Nav>
      </Content>

      <Footer>
        <strong>Carlos Longhi</strong>

        <ButtonText
          icon={FiLogOut}
          onClick={signOut}
          to='/'
        />
      </Footer>
    </Container>
  );
}