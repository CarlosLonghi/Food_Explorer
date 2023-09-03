import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Content, Head } from './styles';

import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer';

import HeadImage from '../../assets/mask-group.png'


export function Home({ isAdmin }){

  return(
    <Container>
      <Header isAdmin={isAdmin}/>

      <Content>
        <Head>
          <img className='responsive-img' src={HeadImage} alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Head>

        <Carousel section='Refeições' isAdmin={isAdmin}/>
        <Carousel section='Sobremesas' isAdmin={isAdmin}/>
        <Carousel section='Bebidas' isAdmin={isAdmin}/>

      </Content>

      <Footer/>
    </Container>
  )
}