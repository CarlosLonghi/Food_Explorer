import { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { Header } from '../../components/Header'

export function Home(){

  return(
    <Container>
      <Header/>
    </Container>
  )
}