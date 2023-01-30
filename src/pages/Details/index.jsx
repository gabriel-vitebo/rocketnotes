import { Container, Links } from "./style"

import { Header } from "../../componets/header"
import { Button } from "../../componets/button"
import { Tag } from "../../componets/Tag"
import { Section } from "../../componets/Section"
import { ButtonText } from "../../componets/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <ButtonText title="excluir nota" />

      <Section title="Links úteis">
        <Links>
          <li><a>https://www.rocketseat.com.br/</a></li>
        </Links>
        <Links>
          <li><a>https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title="voltar" />
    </Container>
  )
}