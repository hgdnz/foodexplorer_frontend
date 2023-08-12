import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { ShowDish } from '../pages/ShowDish'
import { EditDish } from '../pages/EditDish'
import { Favorites } from "../pages/FavDishes";


export function AppRoutes({isAdmin}){
  return(
    <Routes>
      <Route path='/' element={<Home isAdmin={isAdmin}/>}/>
      <Route path='/createDish' element={<NewDish isAdmin={isAdmin}/>}/>
      <Route path='/showDish/:id' element={<ShowDish isAdmin={isAdmin}/>}/>
      <Route path='/editDish/:id' element={<EditDish isAdmin={isAdmin}/>}/>
      <Route path="/favorites" element={<Favorites isAdmin={isAdmin} />} />
    </Routes>
  )
}