import { FiSearch, FiLogOut } from 'react-icons/fi'
import { TbReceipt, TbPlus } from 'react-icons/tb'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';


import { Container, Wrapper, Brand, Search, HeaderControl } from "./styles";

import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import BrandLogo from '../../assets/brand-logo.svg'
import { useNavigate, Link } from 'react-router-dom'

export function Header({onChange, isAdmin}) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleNew() {
    navigate('/new')
  }

  return (
    <Container>
      <Wrapper>
        <Link to='/'>
          <Brand>
            <div className="logo">
              <img src={BrandLogo} alt="Brand Logo" />
              <h2>food explorer</h2>
            </div>
            {
              isAdmin &&
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
          <Button 
            icon={isAdmin ? TbPlus : TbReceipt}
            title={isAdmin ? 'Novo prato' : 'Pedidos (0)'}
            onClick={isAdmin ? handleNew : ''}
          />

          <ButtonText
            icon={FiLogOut}
            onClick={signOut}
            to='/'
          />
        </HeaderControl>
      </Wrapper>
    </Container>
  )
}