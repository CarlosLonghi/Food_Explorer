import { Container, Main, Content, Title, Form } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonBack } from '../../components/ButtonBack';

import { Button } from '../../components/Button';

import { BsChevronLeft, BsUpload } from 'react-icons/bs'
import { MdCreate } from 'react-icons/md'
import { useEffect, useRef } from 'react'
import M from 'materialize-css';

export function New(){
  const textareaRef = useRef(null);

  useEffect(() => {
    const initializeSelect = () => {
      const selectElements = document.querySelectorAll('select');
      M.FormSelect.init(selectElements, {});
    };
    initializeSelect();

    if (textareaRef.current) {
      window.M.textareaAutoResize(textareaRef.current);
    }    
  }, []);

  return(
    <Container>
      <Header isAdmin={true}/>
      <Main>
        <ButtonBack
          icon={BsChevronLeft}
          title='voltar'
        />

        <Content>
          <Title>Adicionar prato</Title>

          <Form action="" className="col s12">

            <div className='row'>
              <div class="file-field input-field col s6">
                <div class="btn">
                  <span><BsUpload/></span>
                  <input type="file" accept=".png, .jpeg" required/>
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" placeholder='Selecione uma imagem'/>
                </div>
              </div>
                  
              <div class="input-field col s6">
                <input id="name" type="text" required/>
                <label for="name">Nome</label>
              </div>
            </div>

            <div className='row'>
              <div className="input-field col s6">
                <select
                  id='category'
                  name='category'
                  required
                >
                  <option value="" disabled selected>Selecione...</option>
                  <option value="refeicao">Refeição</option>
                  <option value="sobremesa">Sobremesa</option>
                </select>

                <label for="category">Categoria</label>
              </div>
                
              <div className="input-field col s6">
                <input id="price" type="text" required/>
                <label for="price">Preço</label>
              </div>
            </div>
            
            <div className="row">
              <div className="input-field col s12">
                <select multiple required>
                  <option value="" disabled>Selecione...</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <label>Ingredientes</label>
              </div>

              <div className="input-field col s12">
                <textarea 
                  id="description" 
                  className="materialize-textarea"
                  ref={textareaRef}
                  required
                ></textarea>
                <label for="description">Descrição</label>
              </div>
            </div>

            <div className='row'>
              <div className='col s4 offset-s8'>
                <Button 
                  type="submit"
                  icon={MdCreate}
                  title={'Adicionar'}
                />
              </div>
            </div>
          </Form>
        </Content>

      </Main>
      
      <Footer/>
    </Container>
  )
}