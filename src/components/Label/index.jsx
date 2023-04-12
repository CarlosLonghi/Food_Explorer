import { Container } from './styles'

export function Label(props) {
  return (
    <Container htmlFor={props.for}>
      {props.text}
      {props.required && <span className='required'>*</span>}
    </Container>
  )
}