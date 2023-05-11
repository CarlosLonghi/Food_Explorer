import { Container, Main, Content, Details, Title, Text, Tags, Controls, Control } from './styles';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonBack } from '../../components/ButtonBack';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

import { BsChevronLeft } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'

import CardImage from '../../assets/salada-ravanello.png'
import { Tag } from '../../components/Tag';

export function Preview(){

  return(
    <Container>
      <Header/>
      <Main>
        <ButtonBack
          icon={BsChevronLeft}
          title='voltar'
        />

        <Content>
          <img src={CardImage} alt="" />          
          <Details>
            <Title>
              Salada Ravanello
            </Title>

            <Text>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
            </Text>

            <Tags>
              <Tag 
                title='Cebola'
              />  
              <Tag 
                title='Alface'
              />  
              <Tag 
                title='Alface'
              />
              <Tag 
                title='Alface'
              />
              <Tag 
                title='Alface'
              />
              <Tag 
                title='Alface'
              />
              <Tag 
                title='Alface'
              />
              <Tag 
                title='Alface'
              />
              <Tag 
                title='Alface'
              />
              <Tag 
                title='Alface'
              />
              <Tag 
                title='Alface'
              />
            </Tags>

            <Controls>
              <Control>
                <ButtonText
                  icon={BiMinus}
                />
                <strong>01</strong>
                <ButtonText
                  icon={BiPlus}
                />
              </Control>

              <Button
                title='incluir ∙ R$ 25,00'
              />

            </Controls>
            
          </Details>
       
        </Content>

      </Main>
      
      <Footer/>
    </Container>
  )
}