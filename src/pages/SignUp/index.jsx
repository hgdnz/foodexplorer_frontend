import { Container, Form, Logo } from './styles'
import { Link, useNavigate } from "react-router-dom";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import brand from '../../assets/brand.svg'
import { useState } from 'react';
import {api} from '../../services/api'


export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

function handleSignUp(){
  if(!name || !email || !password) {
    return alert('Preencha todos os campos!')
  }
  
  if (password.length < 6) {
    return alert("A senha deve ter no mínimo 6 caracteres!");
  }

  api.post('/users', { name, email, password })
  .then(()=>{
    alert('Usuário cadastrado com sucesso!')
    navigate(-1);
  })
  .catch(error =>{
    if(error.response){
      alert(error.response.data.message)
    } else {
      alert("Não foi possível cadastrar.")
    }
  } )
}

  return(
    <Container>
      <div className="parent">
        <div className="logo">  <Logo>
      <img src={brand} alt="Logo" />
      </Logo></div>
        <div className="form"> <Form>
        <h1>Crie sua conta</h1>

        <p>Seu nome</p>
        <Input
        placeholder='Exemplo: Maria da Silva'
        onChange={e => setName(e.target.value)}
         
        />
        <p>Email</p>
        <Input
        placeholder='Exemplo: maria@mail.com'
        onChange={e => setEmail(e.target.value)}
                  
        />

        <p>Senha</p>
        <Input
        type='password'
        placeholder='No mínimo 6 caracteres'
        onChange={e => setPassword(e.target.value)}          
        />
        <Button title={'Criar Conta'} onClick={handleSignUp} />
        <Link to='/'>Já tenho uma conta</Link>
      </Form> </div>
      </div>
     
     
    </Container>
  )
}