import { useState } from 'react'
import { Container, Form, Logo } from './styles'
import { useAuth } from '../../hooks/auth'
import { Link } from "react-router-dom";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import brand from '../../assets/brand.svg'

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

  return(
    <Container>
      <div className="parent">
        <div className="logo">  <Logo>
      <img src={brand} alt="Logo" />
      </Logo></div>
        <div className="form"> <Form>
        <h1>Faça Login</h1>
        <p>Email</p>
        <Input
        placeholder="Exemplo: exemplo@exemplo.com.br"
        onChange={e => setEmail(e.target.value) }
                  
        />
        <p>Senha</p>
        <Input
        type='password'
        placeholder="No mínimo 6 caracteres."
        onChange={e => setPassword(e.target.value) }
       
        />
        <Button title={'Entrar'} onClick={handleSignIn}/>
        <Link to='/signUp'>Criar uma conta</Link>
      </Form> </div>
      </div>
     
     
    </Container>
  )
}