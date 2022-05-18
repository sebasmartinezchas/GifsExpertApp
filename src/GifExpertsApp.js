import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertsApp = () => {
const [categories, setCategories] = useState(["One Punch"]);
  // const handledAdd=()=>{
  //   // setCategories( ["HunterXHunter",...categories,]);//Solución 1 Se usa el setCategories para actualizar el valor del arreglo, siempre usando el spred operator
  // setCategories(cats=>[...cats,"HunterXHunter"]); // Solución 2 recibe un callback y devuelve un nuevo arreglo con las categorias iniciales (spread operator) más la agregada
  
  return (
    <div>
      <h2>GifExpertsApp</h2>
      <AddCategory setCategories={setCategories}/ >      
      <hr/>  
   
     <ol>
      {
        categories.map(category =>
      < GifGrid category={category}
      key={category}
      />
        )
      }
     </ol>
      </div>
  )
}
export default GifExpertsApp;

