import { Container, Links } from "./style"

import { Header } from "../../componets/header"
import { Button } from "../../componets/button"
import { Section } from "../../componets/Section"
import { Tag } from "../../componets/Tag"

export function Details() {
  return (
    <Container>
      <Header />

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