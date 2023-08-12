import { Container, Form, ImageInput, BackFoward } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { IngredientItem } from '../../components/IngredientItem';
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiUpload } from "react-icons/fi";

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api';

  export function NewDish({ isAdmin }){
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('')
    const [price, setPrice] = useState('');
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

 
  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
    setFileName(file.name);
    }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag('')
    }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
    }


  async function handleNewDish() {
    if (!image) {
    return alert("Selecione a imagem do prato.");
    }

  if (!name) {
    return alert("Digite o nome do prato.");
    }

  if (!category) {
    return alert("Selecione a categoria.");
    }

  if (tags.length === 0) {
    return alert("Informe pelo menos um ingrediente do prato.");
    }

  if (newTag) {
    return alert(
    "Você deixou um ingrediente sem adicionar. Clique para adicionar ou deixe o campo vazio."
    );
  }

  if (!price) {
    return alert("Digite o valor do prato.");
    }

  if (!description) {
    return alert("Digite a descrição do prato.");
    }

  setLoading(true);

  const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    formData.append("ingredients", JSON.stringify(tags));

  try {
    await api.post("/dishes", formData);
    alert("Prato cadastrado com sucesso!");
    navigate(-1);
    } catch (error) {
    if (error.response) {
    alert(error.response.data.message);
    } else {
    alert("Não foi possível cadastrar o prato.");
    }
    } finally {
    setLoading(false);
    }
  }

return(
<Container>
  <header>
    <Header/>
  </header>
    <main>
      
  <Form>
  <div className='hdr'>        
        <BackFoward to='/'>
        <FiArrowLeft/>
          voltar
        </BackFoward>
  </div>
        <h1>Adcionar Prato</h1>
    <div className='prato'>
      <Section className='imgDish' title='Imagem do prato'>        
      <ImageInput className="image">
      <label htmlFor="image">
        <FiUpload size={"2.4rem"} />
        <span>{fileName || "Selecione imagem"}</span>

        <input 
          id="image" 
          type="file"
          onChange={handleImageChange}
        />
      </label>
      </ImageInput>
      </Section>

      <Section className='nameDish' title='Nome do Prato'>
        <Input
        className='nameDish'
        placeholder='Ex. Salada Ceasar'
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
      placeholder='R$ 00,00'
      type='number'
      value={price}
      onChange={e => setPrice(e.target.value)}
      />
      </Section>
    </div>

    <div className="description">
      <Section title='Descrição'>
      <Textarea 
      placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
      defaultValue={description}
      onChange={e => setDescription(e.target.value)}              
      />              
      </Section>
    </div>
    <div className="send">
      <Button 
      onClick={handleNewDish}
      loading={loading}
      title='Salvar alterações'
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