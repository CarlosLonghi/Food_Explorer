import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Content, Head } from './styles';

import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'

import HeadImage from '../../assets/mask-group.png'

import CardImage from '../../assets/salada-ravanello.png'

export function Home(){
  const cards = [
    {
      id: '1',
      image: CardImage,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },

    {
      id: '2',
      image: CardImage,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },
    {
      id: '3',
      image: CardImage,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },
    {
      id: '4',
      image: CardImage,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    }

  ]

  return(
    <Container>
      <Header/>

      <Content>
        <Head>
          <img src={HeadImage} alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Head>

        <Carousel section='Refeições' cards={cards}/>

      </Content>
      
    </Container>
  )
}