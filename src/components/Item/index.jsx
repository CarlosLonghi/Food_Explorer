import { FiPlus, FiTrash2 } from 'react-icons/fi'

import { Container } from './styles'

export function Item({ isNew, value, onClick, ...rest}){
  return (
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
        className={isNew ? 'green darken-1' : 'red darken-1'}
      >
        { isNew ? <FiPlus/> : <FiTrash2/>}
      </button>
    </Container>
  )
}