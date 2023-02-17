import { useState, useEffect } from "react"
import { Container, Links, Content } from "./style"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Header } from "../../componets/header"
import { Button } from "../../componets/button"
import { Tag } from "../../componets/Tag"
import { Section } from "../../componets/Section"
import { ButtonText } from "../../componets/ButtonText"

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleDelete() {
    const confirm = window.confirm("Deseja deletar essa nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText onClick={handleDelete} title="excluir nota" />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url}>{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Button onClick={handleBack} title="voltar" />
          </Content>
        </main>
      )}
    </Container>
  )
}
