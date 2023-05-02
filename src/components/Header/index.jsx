import { FiSearch, FiLogOut } from 'react-icons/fi'
import { TbReceipt } from 'react-icons/tb'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';


import { Container, Wrapper, Search } from "./styles";

import { Logo } from '../Logo'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'

export function Header({onChange}) {
  const { signOut, user } = useAuth()

  return (
    <Container>
      <Wrapper>
        <Logo/>

        <Search>
          <FiSearch size={20}/>
          <input 
            type="text" 
            placeholder='Busque por pratos ou ingredientes'
          />
        </Search>

        <Button 
          icon={TbReceipt}
          title='Pedidos (0)'
        />

        <ButtonText
          icon={FiLogOut}
        />
      </Wrapper>
    </Container>
  )
}