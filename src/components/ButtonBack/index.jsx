import { Container } from "./styles";

export function ButtonBack({  icon: Icon, title, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {Icon && <Icon size={32}/>}
      {title}
    </Container>
  )
}