import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style"

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/gabriel-vitebo.png" 
          alt="foto de perfil do usuário" 
        />
        <div>
          <span>Bem-Vindo</span>
          <strong>Gabriel Vitebo</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}