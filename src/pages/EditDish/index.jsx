import { Container, Form, ImageInput, BackFoward } from './styles'
import { FiArrowLeft, FiUpload } from "react-icons/fi";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { IngredientItem } from '../../components/IngredientItem';
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'

import { api } from '../../services/api'

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function EditDish(){
  
  const params = useParams();
  const navigate = useNavigate();

  const [dish, setDish] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setDish(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchDish();
  }, [params.id]);

  useEffect(() => {
    if (dish) {
      setFileName(dish.image);
      setImage(dish.image);
      setName(dish.name);
      setCategory(dish.category);
      setPrice(dish.price);
      setDescription(dish.description);
  
      const allIngredients = dish.ingredients.map((ingredient) => ingredient.name);
      setTags(allIngredients);
    }
  }, [dish]);  

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
    setUpdatedImage(file);
    setFileName(file.name);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleEditDish() {
    if (!image) {
      return alert("Selecione a imagem do prato.");
    }

    if (!name) {
      return alert("Digite o nome do prato.");
    }

    if (!category) {
      return alert("Selecione a categoria do prato.");
    }

    if (tags.length === 0) {
      return alert("Informe pelo menos um ingrediente do prato.");
    }

    if (newTag) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    if (!price) {
      return alert("Digite o preço do prato.");
    }

    if (!description) {
      return alert("Digite a descrição do prato.");
    }

    setLoading(true);

    try {
      const updatedDish = {
        name: name,
        category: category,
        price: price,
        description: description,
        ingredients: tags,
      };
  
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
  
        await api.patch(`/dishes/${params.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
  
      await api.patch(`/dishes/${params.id}`, updatedDish);
  
      alert("Prato atualizado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato.");
      }
    } finally {
      setLoading(false);
    }
	}

  async function handleRemoveDish() {
    const confirm = window.confirm("Deseja realmente remover o prato?");
  
    if (confirm) {
      setLoading(true);

      try {
        await api.delete(`/dishes/${params.id}`);
        navigate("/");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível excluir o prato.");
        }
      } finally {
        setLoading(false);
      }
    }
  } 


  return(
    <Container>
      <Header/>
      
      <main>    
    <Form>
    <div className='backFoward'>        
      <BackFoward to='/'>
              <FiArrowLeft/>
              voltar
            </BackFoward>
      </div>
      <h1>Editar Prato</h1>
      <div className='prato'>
      <Section className='imgDish' title='Imagem do prato'>
        <div>
      <ImageInput className="image">        
        <label htmlFor="image">
          <FiUpload size={"2.4rem"} />
          <span>{fileName}</span>

          <input 
            id="image" 
            type="file"
            onChange={handleImageChange}
          />
        </label>
        </ImageInput>
        </div>

      </Section>

      <Section className='nameDish' title='Nome do Prato'>
                <Input
                className='nameDish'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                />
      </Section>

      <Section className='category' title="Categoria">
                        <label htmlFor="category">
                          <select 
                          className='category'
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          >
                            <option value="">Selecionar</option>
                            <option value="meal">Refeição</option>
                            <option value="dessert">Sobremesa</option>
                            <option value="beverage">Bebida</option>
                          </select>
                        </label>
      </Section>
      </div>

      <div className='priceAndIng'>
      <Section className="ingredients" title='Ingredientes'>          
          <div className="tags">
            {
              tags.map((tag, index) => (
                <IngredientItem 
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
                />
                ))
              }
                <IngredientItem
                isNew
                placeholder="adicionar"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                />
                
         </div>         
      </Section>
      <Section className='price' title='preço'>
        <Input 
        type='number'
        value={price}
        onChange={e => setPrice(e.target.value)}
        />
      </Section>
</div>

          <div className="description">
            <Section title='Descrição'>
              <Textarea 
              defaultValue={description}
              onChange={e => setDescription(e.target.value)}              
              />              
            </Section>
          </div>
    <div className="send">
    <Button 
    title='Excluir prato'
    onClick={handleRemoveDish}
    loading={loading}
    />

    <Button 
    
     title='Salvar alterações'
     onClick={handleEditDish}
     loading={loading}
    />
    </div>
    </Form>
      </main>
      <footer>
       <Footer/>
      </footer>
    </Container>
    )
}