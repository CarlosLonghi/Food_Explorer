import { Container } from "./styles";
import BrandLogo from "../../assets/brand-logo.svg"

export function Logo() {
  return (
    <Container>
      <img src={BrandLogo} alt="Brand Logo"/>
      
      <h1>food explorer</h1>
    </Container>
  )
}