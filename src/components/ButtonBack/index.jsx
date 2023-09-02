import { Container } from "./styles";

export function ButtonBack({  icon: Icon, title, ...rest }) {
  return (
    <Container
      type="button"
      to="/"
      {...rest}
    >
      {Icon && <Icon size={32}/>}
      {title}
    </Container>
  )
}