import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Content, Head } from './styles';

import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer';

import HeadImage from '../../assets/mask-group.png'

export function Home(){

  return(
    <Container>
      <Header/>

      <Content>
        <Head>
          <img className='responsive-img' src={HeadImage} alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Head>

        <Carousel section='Refeições'/>
        <Carousel section='Sobremesas'/>
        <Carousel section='Bebidas'/>

      </Content>

      <Footer/>
    </Container>
  )
}