import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CardRecipe from './cardRecipe/cardRecipe'
import './recipeTop.css'

import Receta_recetasTop1 from './image/recetaTop1.jpg'
import Receta_recetasTop2 from './image/recetaTop2.jpg'
import Receta_recetasTop3 from './image/recetaTop3.jpg'
import Receta_recetasTop4 from './image/recetaTop4.jpg'
import Receta_recetasTop5 from './image/recetaTop5.jpg'

const recetasTop = [
  {
    id: 1,
    img: Receta_recetasTop1,
    title: 'Pollo al horno',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

  {
    id: 2,
    img: Receta_recetasTop2,
    title: 'Toston huevo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

  {
    id: 3,
    img: Receta_recetasTop3,
    title: 'Fideos al Champiñon',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 4,
    img: Receta_recetasTop4,
    title: 'Matambre de cerdo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 5,
    img: Receta_recetasTop5,
    title: 'Hamburguesa',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

];


const RecipeTop = () => {

  const [estaPausado, setEstaPausado] = useState(false);

  const handlePause = () => setEstaPausado(true);
  const handleRetomar = () => setEstaPausado(false);


  return (
    <>
      <div 
      className=" container-fluid container__recetasTop"
      onMouseEnter={handlePause}
      onMouseLeave={handleRetomar}>
        <h2>RECETAS RECOMENDADAS</h2>
        <div className={`container__slider ${estaPausado ? 'paused' : ''}`}>

          <div
            className="container-fluid container__recipe">
            {recetasTop.map((recetasTop) => (
              <CardRecipe
                key={recetasTop.id}
                img={recetasTop.img}
                title={recetasTop.title}
                description={recetasTop.description}
              />
            ))}
          </div>

        </div>

      </div>
    </>
  )
}
export default RecipeTop