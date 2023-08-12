import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'


import { Container, BackFoward } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button'
import { NumberPicker } from '../../components/NumberPicker'
import { Tag } from '../../components/Tags'
import { api } from '../../services/api'

  export function ShowDish({isAdmin, user_id}){
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [number, setNumber] = useState(1);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleEdit() {
    navigate(`/editDish/${params.id}`);
  }

  async function handleInclude() {
    setLoading(true);

    try {
      const cartItem = {
        dish_id: data.id,
        name: data.name,
        quantity: number,
      };

      const response = await api.get('/carts', { params: { created_by: user_id } });
      const cart = response.data[0];

      if (cart) {
        await api.patch(`/carts/${cart.id}`, { cart_items: [cartItem] });
      } else {
        const createResponse = await api.post('/carts', { cart_items: [cartItem], created_by: user_id });
        const createdCart = createResponse.data;

        setCartId(createdCart.id);
      }

      alert('Prato adicionado ao carrinho!');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível adicionar ao carrinho.');
        console.log('Erro ao adicionar ao carrinho:', error);
      }
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return(
    <Container>
      <header><Header/></header>
      <main>    
      {
        data &&      
      <div>
        <div>
            <BackFoward to='/'>
              <FiArrowLeft/>
              voltar
            </BackFoward>
        </div>
        <div className="dishes">          
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />
        <section className='description'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        {
          data.ingredients && 
            <section>
              {
                data.ingredients.map(ingredient => (
                  <Tag 
                  key={String(ingredient.id)} 
                  title={ingredient.name} 
                 />
                  ))
                }
            </section>
                }

          <section className='amount'>
            {isAdmin ? 
                    <Button 
                      title="Editar prato" 
                      className="edit" 
                      onClick={handleEdit}
                      loading={loading}
                      /> : 
                      <>
                      <NumberPicker number={number} setNumber={setNumber}/>
                      <Button 
                        title={                          
                          `incluir ∙ R$ ${(data.price * number).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`                          
                        } 
                        className="include" 
                        onClick={handleInclude}
                        loading={loading}
                      />
                    </>
                  }
          </section>
          
        </section> 
        </div>                
      </div>     
    }
    </main>
        <footer>
      <Footer/>
        </footer>
    </Container>
  )
}