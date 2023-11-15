import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Logo } from '../../components/Logo'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText';

import { Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const navigate = useNavigate()
  
  const passwordMatched = password === passwordConfirm
  const checkFields = !name || !email || !password || !passwordConfirm

  function handleSignUp(){
    if(checkFields){
      return alert('Preencha todos os campos!')
    }

    if(!passwordMatched){
      return alert('As senhas não correspondem!')
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert('Usuário cadastrado com sucesso!')
      navigate(-1)
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert('Não foi possível cadastrar!')
      }
    })
    
  }

  return (
    <Container>
      <Logo/>

      <Form>
        <h2>Crie sua conta</h2>
        <Label htmlFor='name' text='Nome'/>
        <Input
          id='name'
          placeholder='Exemplo: Maria da Silva'
          type='text'
          icon={FiUser}
          onChange={event => setName(event.target.value)}
        />

        <Label htmlFor='email' text='Email'/>
        <Input
          id='email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
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
        <Label htmlFor='confirm' text='Confirmar Senha'/>
        <Input
          id='confirm'
          placeholder='No mínimo 6 dígitos'
          type='password'
          icon={FiLock}
          onChange={event => setPasswordConfirm(event.target.value)}
        />

        <Button 
          title='Criar conta'
          onClick={handleSignUp}
        />

        <ButtonText 
          title='Já tenho uma conta'
          icon={FiArrowLeft}
          to={-1}
        />
      </Form>
    </Container>
  )
}