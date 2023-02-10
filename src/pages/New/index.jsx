import { useState } from "react"
import { Link } from "react-router-dom"

import { TextArea } from "../../componets/TextArea"
import { NotesItem } from "../../componets/NotesItem"
import { Section } from "../../componets/Section"
import { Button } from "../../componets/button"
import { Header } from "../../componets/header"
import { Input } from "../../componets/input"

import { Container, Form } from "./style"

export function New() {

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Titulo" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NotesItem
                key={String(index)}
                value={link}
                onClick={() => {}}
              />
            ))}
            
            <NotesItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NotesItem value="React" />
              <NotesItem value="" isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
