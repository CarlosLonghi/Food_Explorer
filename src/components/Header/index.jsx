
import { useAuth } from '../../hooks/auth';
import { USER_ROLES } from '../../utils/roles';
import { api } from '../../services/api';

import { Container, Menu, Brand, Search, HeaderControl } from "./styles";
import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi';
import { TbReceipt, TbPlus } from 'react-icons/tb';

import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import BrandLogo from '../../assets/brand-logo.svg'
import { useNavigate, Link } from 'react-router-dom'

export function Header({onChange, onOpenMenu }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <FiMenu />
      </Menu>

      <Link to='/'>
        <Brand>
          <div className="logo">
            <img src={BrandLogo} alt="Logo Food Explorer" />
            <h2>food explorer</h2>
          </div>
          {
            [USER_ROLES.ADMIN].includes(user.role) &&
            <span>admin</span>
          }
        </Brand>
      </Link>

      <Search>
        <FiSearch size={20}/>
        <input 
          type="text" 
          placeholder='Busque por pratos ou ingredientes'
        />
      </Search>

      <HeaderControl>
        {
          [USER_ROLES.ADMIN].includes(user.role) &&
          <Button 
            icon={TbPlus}
            title={'Novo prato'}
            onClick={() => navigate('/new')}
          />
        }
        {
          [USER_ROLES.CUSTOMER].includes(user.role) &&
          <Button 
            icon={TbReceipt}
            title={'Pedidos (0)'}
            onClick={'#'}
          />
        }

        <ButtonText
          icon={FiLogOut}
          onClick={signOut}
          to='/'
        />
      </HeaderControl>
    </Container>
  )
}