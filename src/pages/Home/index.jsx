import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Section } from '../../components/Section';
import { Dishes } from "../../components/Dishes";


import { Footer } from '../../components/Footer'
import { api } from '../../services/api';

import { register } from 'swiper/element/bundle';

register();

export function Home({ isAdmin, user_id }){


  const swiperElRef1 = useRef(null);
  const swiperElRef2 = useRef(null);
  const swiperElRef3 = useRef(null);
  


  const [dishes, setDishes] = useState({ meals: [], desserts: [], beverages: [] });
  const [search, setSearch] = useState("");

  const navigate = useNavigate();


  function handleDetails(id) {
    navigate(`/showDish/${id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      const meals = response.data.filter(dish => dish.category === "meal");
      const desserts = response.data.filter(dish => dish.category === "dessert");
      const beverages = response.data.filter(dish => dish.category === "beverage"); 

      setDishes({ meals, desserts, beverages });
    }

    fetchDishes();
  }, [search]);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await api.get("/favorites");
        const favorites = response.data.map((favorite) => favorite.dish_id);

        setFavorites(favorites);
      } catch (error) {
        console.log("Erro ao buscar favoritos:", error);
      }
    };

    fetchFavorites();
  }, []);

  const updateFavorite = async (isFavorite, dishId) => {
    try {
      if (isFavorite) {
        await api.delete(`/favorites/${dishId}`);

        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite !== dishId)
        );
      } else {
        await api.post('/favorites', { dish_id: dishId });
        setFavorites((prevFavorites) => [...prevFavorites, dishId]);
      }
    } catch (error) {
      console.log('Erro ao atualizar favoritos:', error);
    }
  };

  return(
    <Container>
      <header>
      <Header
      setSearch={setSearch}
      />
      </header>            
      <main>
      <div className='banner'>
        <Banner/>
      </div>  
        <div className='main'>  
          <Content>
            <Section title="Refeições">
              <swiper-container
                ref={swiperElRef1}
                space-between={"20"}
                slides-per-view="auto"
                scrollbar={{ draggable: true }}
                dragSize='auto'
                navigation={"true"}
                grab-cursor="true"
              >
                {
                  dishes.meals.map(dish => (
                    <swiper-slide key={String(dish.id)}>
                      <Dishes 
                        isAdmin={isAdmin}
                        data={dish}
                        isFavorite={favorites.includes(dish.id)}
                        updateFavorite={updateFavorite} 
                        user_id={user_id}
                        handleDetails={handleDetails}
                      />
                    </swiper-slide>
                  ))
                }
              </swiper-container>
            </Section>


            <Section title="Sobremesas">
              <swiper-container
                ref={swiperElRef2}
                space-between={"20"}
                slides-per-view="auto"
                scrollbar={{ draggable: true }}
                navigation={"true"}
                grab-cursor="true"
              >
                {
                  dishes.desserts.map(dish => (
                    <swiper-slide key={String(dish.id)}>
                      <Dishes 
                        isAdmin={isAdmin}
                        data={dish}
                        isFavorite={favorites.includes(dish.id)}
                        updateFavorite={updateFavorite} 
                        user_id={user_id}
                        handleDetails={handleDetails}
                        
                      />
                    </swiper-slide>
                  ))
                }
              </swiper-container>
            </Section>

            <Section title="Bebidas">
              <swiper-container
                ref={swiperElRef3}
                space-between={"20"}
                slides-per-view="auto"
                scrollbar={{ draggable: true }}
                navigation={"true"}
                grab-cursor="true"
                
              >
                {
                  dishes.beverages.map(dish => (
                    <swiper-slide key={String(dish.id)}>
                      <Dishes 
                        isAdmin={isAdmin}
                        data={dish} 
                        isFavorite={favorites.includes(dish.id)}
                        updateFavorite={updateFavorite}
                        user_id={user_id}
                        handleDetails={handleDetails}
                      />
                    </swiper-slide>
                  ))
                }
              </swiper-container>

            </Section>
          </Content>
        </div>
      </main>     
          <footer>
        <Footer/>
      </footer>
    </Container>
    
  )
}