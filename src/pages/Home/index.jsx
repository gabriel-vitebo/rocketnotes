import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { api } from '../../services/api'
import { Container, Brand, Menu, Search, Content, NewNote } from "./style"

import { Note } from "../../componets/Note"
import { Input } from '../../componets/input'
import { Header } from '../../componets/header'
import { Section } from "../../componets/Section"
import { ButtonText } from "../../componets/ButtonText"

export function Home(){
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  function handleTagSelected(tagName){
    const alreadySelected = tagsSelected.includes(tagName)
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    }else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }


  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  },[])
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive={tagsSelected.length === 0}
            onClick={() => handleTagSelected("all")}
          />
        </li>
        {
          tags && tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}