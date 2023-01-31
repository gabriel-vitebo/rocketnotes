import { Header } from "../../componets/header"
import { Input } from "../../componets/input"

import { Container, Form } from "./style"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Titulo" />

        </Form>
      </main>
    </Container>
  )
}