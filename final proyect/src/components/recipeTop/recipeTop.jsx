import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CardRecipe from './cardRecipe/cardRecipe'
import './recipeTop.css'

import Receta_recetasTop1 from './image/recetaTop1.jpg'

const recetasTop = [
  {
    id: 1,
    img: Receta_recetasTop1,
    title: 'Pollo al horno',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

  {
    id: 2,
    img: Receta_recetasTop1,
    title: 'Pollo al horno',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

  {
    id: 3,
    img: Receta_recetasTop1,
    title: 'Pollo al horno',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },

];

const RecipeTop = () => {
  return (
    <>
      <div className="container__recetasTop">
        <h2>RECETAS RECOMENDADAS</h2>
        <div className="container-fluid container__recipe">
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
    </>
  )
}
export default RecipeTop