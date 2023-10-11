import { FiPlus, FiX } from 'react-icons/fi'

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
        className={isNew ? 'green darken-2' : 'red darken-2'}
      >
        { isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}