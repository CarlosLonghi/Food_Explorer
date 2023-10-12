import { Container, Main, Content, Title, Text, Tags, Controls, Control } from './styles';

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
import { useNavigate } from 'react-router-dom'

export function Preview(){

  const navigate = useNavigate()
  function handleBack() {
    navigate(-1)
  }

  return(
    <Container>
      <Header isAdmin={true}/>
      <Main>
        <ButtonBack
          icon={BsChevronLeft}
          title='voltar'
          onClick={handleBack}
        />

        <Content>
          <img className='responsive-img' src={CardImage} alt="Product image"/>          
          <div>
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
                className="green darken-4"
                title='incluir ∙ R$ 25,00'
              />

            </Controls>
            
          </div>
       
        </Content>

      </Main>
      
      <Footer/>
    </Container>
  )
}