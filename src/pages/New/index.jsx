import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import M from 'materialize-css';
import { api } from '../../services/api';

import { Container, Main, Content, Title, Form } from './styles';

import { BsChevronLeft, BsUpload } from 'react-icons/bs'
import { MdOutlineSaveAlt } from 'react-icons/md'

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonBack } from '../../components/ButtonBack';
import { Button } from '../../components/Button';
import { Item } from '../../components/Item';
import { SideMenu } from '../../components/SideMenu';


export function New(){
  const navigate = useNavigate()
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const textareaRef = useRef(null)
  // const [image, setImage] = useState()
  const [name, setName] = useState()
  const [categoryId, setCategoryId] = useState()
  const [price, setPrice] = useState()

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [description, setDescription] = useState()

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


  function handleAddIngredient(){
    if (newIngredient) {
      setIngredients(prevState => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleSubmit() {
    await api.post('/product', {
      name,
      category_id: categoryId, 
      price,
      // image,
      ingredients,
      description
    })
    .then(() => {
      alert('Produto cadastrado com sucesso!')
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert('Erro ao cadastrar o produto!')
      }
    })
  }

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
          <Title>Adicionar prato</Title>

          <Form className="col s12">
            <div className='row'>
              {/* <div className="file-field input-field col s6">
                <div className="btn green darken-1">
                  <span><BsUpload/></span>
                  <input 
                    type="file" 
                    accept=".png, .jpeg" 
                    onChange={event => setImage(event.target.value)}
                    required
                  />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" placeholder='Selecione uma imagem'/>
                </div>
              </div> */}
                  
              <div className="input-field col s6">
                <input 
                  id="name" 
                  type="text" 
                  onChange={event => setName(event.target.value)}
                  required
                />
                <label htmlFor="name">Nome</label>
              </div>
            </div>

            <div className='row'>
              <div className="input-field col s6">
                <select
                  id='category_id'
                  name='category_id'
                  defaultValue=""
                  onChange={event => setCategoryId(event.target.value)}
                  required
                >
                  <option value="" disabled>Selecione...</option>
                  <option value="1">Refeição</option>
                  <option value="2">Sobremesa</option>
                </select>

                <label htmlFor="category_id">Categoria</label>
              </div>
                
              <div className="input-field col s6">
                <input 
                  id="price" 
                  type="text" 
                  onChange={event => setPrice(event.target.value)}
                  required
                />
                <label htmlFor="price">Preço</label>
              </div>
            </div>
            
            <div className="row">
              <div className="ingredients col s12">
                <Item 
                  isNew
                  className="new-item"
                  placeholder="Novo ingrediente" 
                  onChange={event => setNewIngredient(event.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
                {
                  ingredients.map(( ingredient, index ) => (
                    <Item 
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                } 
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea 
                  id="description" 
                  className="materialize-textarea"
                  ref={textareaRef}
                  onChange={event => setDescription(event.target.value)}
                  required
                ></textarea>
                <label htmlFor="description">Descrição</label>
              </div>
            </div>

            <div className='row'>
              <div className='buttons col s12'>
                <Button 
                  className="green darken-1"
                  type="submit"
                  icon={MdOutlineSaveAlt}
                  title={'Adicionar'}
                  onClick={handleSubmit}
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