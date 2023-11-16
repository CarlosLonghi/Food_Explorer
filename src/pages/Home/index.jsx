import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

import { Container, Content, Head, CarouselWrapper } from './styles';

import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer';
import { SideMenu } from "../../components/SideMenu";

import HeadImage from '../../assets/mask-group.png'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return(
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>

      <Content>
        <Head>
          <img className='responsive-img' src={HeadImage} alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </Head>

        <CarouselWrapper>
          <Carousel section='Refeições'/>
          <Carousel section='Sobremesas'/>
          <Carousel section='Bebidas'/>
        </CarouselWrapper>
      </Content>

      <Footer/>
    </Container>
  )
}