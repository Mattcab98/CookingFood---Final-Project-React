import { useState } from 'react';
import './createRecipe.css';

import AddIngredient from './addIngredient/addIngredient';
import NameRecipe from './nameRecipe/nameRecipe';
import TxtRecipe from './textRecipe/txtRecipe';

const CreateRecipe = () => {
  let nombresRecetas = [];
  let [arreglo, setArreglo] = useState(nombresRecetas);

  return (
    <>
      <div className='container container__createRecipe'>
        <div className='animation__opacity'>
          <div className='container__nameRecipe'>
            <h2>CREA TUS RECETAS</h2>
            <NameRecipe agregarTarea={setArreglo}></NameRecipe>
            <ol>
              {arreglo.map((item, index) => (
                <li key={index} name={item.name}>{item.name}</li>
              ))}
            </ol>
          </div>
          <AddIngredient></AddIngredient>
          <TxtRecipe></TxtRecipe>
          <button className='btn-create btn btn-warning'>CREAR RECETA</button>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;