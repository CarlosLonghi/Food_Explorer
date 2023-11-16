import { useState } from 'react'
import { Container, Form } from "./styles";
import { useAuth } from '../../hooks/auth'

import { FiUserPlus, FiMail, FiLock } from 'react-icons/fi'

import { Logo } from '../../components/Logo'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'


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
        
          <Label htmlFor='email' text='Email'/>
          <Input
            id='email'
            placeholder='exemplo@exemplo.com.br'
            type='text'
            icon={FiMail}
            onChange={event => setEmail(event.target.value)}
          />
        

        <Label htmlFor='password' text='Senha'/>
        <Input
          id='password'
          placeholder='No mínimo 6 dígitos'
          type='password'
          icon={FiLock}
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