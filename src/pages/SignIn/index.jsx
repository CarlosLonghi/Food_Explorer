import { useState } from 'react'
import { FiUserPlus} from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Logo } from '../../components/Logo'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return (
    <Container>  
      <Logo/>
        
      <Form>
        <h2>Faça login</h2>
        <Label for='email' text='Email'/>
        <Input
          id='email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          type='text'
          onChange={event => setEmail(event.target.value)}
        />

        <Label for='password' text='Senha'/>
        <Input
          id='password'
          placeholder='No mínimo 6 caracteres'
          type='password'
          onChange={event => setPassword(event.target.value)}
        />

        <Button 
          title='Entrar' 
          onClick={handleSignIn}
        />

        <ButtonText 
          title='Criar uma conta'
          icon={FiUserPlus}
          to='/register'
        />

      </Form>
    </Container>
  )
}