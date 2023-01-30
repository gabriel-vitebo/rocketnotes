import { Container, Links } from "./style"

import { Header } from "../../componets/header"
import { Button } from "../../componets/button"
import { Section } from "../../componets/Section"

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="@">link 1</a>
          </li>
        </Links>
      </Section>
      
      <Button title="voltar" />
    </Container>
  )
}