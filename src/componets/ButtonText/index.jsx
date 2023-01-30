import { Container } from "./style";

export function ButtonText({ title, ...rest }){
  return(
    <Container
      tyoe="button"
      {...rest}
    >
      {title}
    </Container>
  )
}