import { Container } from './styles'
import brandGray from '../../assets/brandGray.svg'

export function Footer(){
  return(
    <Container>
      <section>
      <div>
      <img src={brandGray} alt="food explorer" />
      </div>  
      <div>
      <p>© 2023 - Todos os direitos reservados.</p>
      </div>  
      </section>     
    </Container>
  )
}