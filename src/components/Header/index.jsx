import { Container, Logo, NewDish, Orders, Nav } from './styles'
import * as FiIcons from 'react-icons/fi'
import brand from '../../assets/brand.svg'
import brandAdmin from '../../assets/brandAdmin.svg'
import { useAuth } from '../../hooks/auth'
import { OrderButton } from '../../components/OrderButton'
import { SearchDishes } from '../../components/SearchDishes'
import { FiX, FiMenu } from 'react-icons/fi'
import { TbReceipt } from "react-icons/tb";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Header({setSearch}){
  const {signOut, user} = useAuth();
  const isAdmin = user.is_admin
  const logo = isAdmin ? brandAdmin : brand;
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const navigate = useNavigate();

  function createDish(){
    navigate('/createDish');
  }
  
  return(
    <Container>
      <div className="menuSpan">
          <button
					className="nav-btn nav-close-btn"
					onClick={() => setMenuIsVisible(!menuIsVisible)}>
					{menuIsVisible ? <FiX /> : <FiMenu />}
			</button> 
        <Nav isVisible={menuIsVisible}>

        <div className='search'>
      <SearchDishes 
       setSearch={setSearch}
       placeholder='Busque por pratos ou ingredientes'
            />
      </div>
      {isAdmin ?
      <ul className='menu'>
         <li>
        <a onClick={createDish}>Novo Prato</a>
        </li>
        <li>
        <a to='/' onClick={signOut}>Sair</a>
        </li>
      </ul>    :
      <ul className='menu'>
        <li>  
     <a to='/' onClick={signOut}>Sair</a>
     </li>
   </ul>      
      }          
        </Nav>  

      </div>
      <Logo>
        <img src={logo} alt="food explorer" />
      </Logo>     
      <div className='search'>
      <SearchDishes 
       setSearch={setSearch}
       placeholder='Busque por pratos ou ingredientes'
            />
      </div>

      <div className=''>
      {isAdmin ? <NewDish to='/createDish'>
        Novo Prato
      </NewDish> 
      : 
      <TbReceipt size={32}/>
      }
      </div>

      <a className='signOut' onClick={signOut}>
        <FiIcons.FiLogOut/>
      </a>
      
    </Container>
  )
}