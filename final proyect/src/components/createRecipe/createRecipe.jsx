import { useState, useEffect } from 'react';
import './createRecipe.css';

import AddIngredient from './addIngredient/addIngredient';
import NameRecipe from './nameRecipe/nameRecipe';

const CreateRecipe = () => {
  let nombresRecetas = [];
  let [arreglo, setArreglo] = useState(nombresRecetas);

  return (
    <>
      <div className='container__nameRecipe'>
        <h2>RECETAS</h2>
        <NameRecipe agregarTarea={setArreglo}></NameRecipe>
        <ol>
          {arreglo.map((item, index) => (
            <li key={index} name={item.name}>{item.name}</li>
          ))}
        </ol>
      </div>

      <AddIngredient></AddIngredient>
    </>
  );
};

export default CreateRecipe;