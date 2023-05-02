import React from "react";
import { Container, Wrapper } from "./styles";

import { Logo } from "../Logo";

export function Footer (){

  return (
    <Container>
      <Wrapper>
        <Logo/>
        <span>
          © 2023 - Todos os direitos reservados.
        </span>
      </Wrapper>
    </Container>
  )
}