import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Content, Head } from './styles';

import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer';

import HeadImage from '../../assets/mask-group.png'

import CardImage from '../../assets/salada-ravanello.png'
import CardImage2 from '../../assets/expresso.png'
import CardImage3 from '../../assets/macarons.png'
import CardImage4 from '../../assets/peachy-pastrie.png'
import CardImage5 from '../../assets/salada-molla.png'

export function Home(){
  const cards = [
    {
      id: '1',
      image: CardImage,
      title: 'Card 1',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },

    {
      id: '2',
      image: CardImage2,
      title: 'Card 2',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },
    {
      id: '3',
      image: CardImage3,
      title: 'Card 3',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
      price: 'R$ 49,97'
    },
    {
      id: '4',
      image: CardImage4,
      title: 'Card 4',
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

      <Footer/>
    </Container>
  )
}