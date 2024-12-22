import './createRecipe.css';
import AddIngredient from './addIngredient/addIngredient'

const CreateRecipe = () => {

  return (
    <>
      <div className='container-fluid container__crearReceta'>

        <div className="container__titleReceta">
          <h3>Mi Receta</h3>
          <input type="text" placeholder='Nombre Receta' />
        </div>
        
        <div className='container__addIngredient'>
          <AddIngredient></AddIngredient>
        </div>

        <div className="descripcionReceta">
          <h3>Descripcion Receta</h3>
          <textarea name="" id=""></textarea>
        </div>

        <button className='btn__create btn btn-warning'>Crear Receta</button>
      </div>
    </>
  )

}

export default CreateRecipe;
