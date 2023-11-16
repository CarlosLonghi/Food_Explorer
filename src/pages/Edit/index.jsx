import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css';

import { Container, Main, Content, Title, Form } from './styles';

import { BsChevronLeft, BsUpload } from 'react-icons/bs'
import { MdSave, MdCancel } from 'react-icons/md'

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonBack } from '../../components/ButtonBack';
import { Button } from '../../components/Button';
import { SideMenu } from '../../components/SideMenu';


export function Edit(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const textareaRef = useRef(null);
  const navigate = useNavigate();

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
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>

      <Main>
        <ButtonBack
          icon={BsChevronLeft}
          title='voltar'
          onClick={() => navigate(-1)}
        />

        <Content>
          <Title>Editar prato</Title>

          <Form action="" className="col s12">

            <div className='row'>
              <div className="file-field input-field col s6">
                <div className="btn green darken-1">
                  <span><BsUpload/></span>
                  <input type="file" accept=".png, .jpeg" required/>
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" placeholder='Selecione uma imagem'/>
                </div>
              </div>
                  
              <div className="input-field col s6">
                <input id="name" type="text" required/>
                <label htmlFor="name">Nome</label>
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

                <label htmlFor="category">Categoria</label>
              </div>
                
              <div className="input-field col s6">
                <input id="price" type="text" required/>
                <label htmlFor="price">Preço</label>
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
                <label htmlFor="description">Descrição</label>
              </div>
            </div>

            <div className='row'>
              <div className='buttons col s12'>
                <Button 
                  className="red darken-4"
                  id='cancel'
                  icon={MdCancel}
                  title={'Cancelar'}
                  onClick={() => navigate(-1)}
                />
                <Button 
                  className="green darken-1"
                  id='confirm'
                  type="submit"
                  icon={MdSave}
                  title={'Salvar Alterações'}
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