import { Container } from './styles'

export function SelectInput(value, ...rest){
  return(
    <Container>
      <select {...rest}>
        <option value={value}></option>
      </select> 
    </Container>
  )
}