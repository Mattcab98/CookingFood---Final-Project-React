/* eslint-disable react/prop-types */
import { useState } from "react";
import './creator.css'

const Creator = ({ createReceta }) => {

    const [newName, setNewName] = useState();
    const [newDescripcion, setNewDescripcion] = useState('');
    const [newIngrediente, setNewIngrediente] = useState('');

    const [addIngrediente, setAddIngrediente] = useState([]);

    const handleAddIngredient = (e) => {
        e.preventDefault();
        if (newIngrediente.trim() !== '') {
            setAddIngrediente([...addIngrediente, newIngrediente.trim()]);
            setNewIngrediente('');
        }
    }

    const handleRemoveIngredient = (index) => {
        let removeIngredient = addIngrediente.filter((x,i) => i !== index);
        setAddIngrediente(removeIngredient);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let crearReceta = {
            name: newName,
            descripcion: newDescripcion,
            ingrediente: addIngrediente.join('\n')
        }

        createReceta(crearReceta);
        setNewName('');
        setAddIngrediente([]);
        setNewDescripcion('');

        // setIsDisabled(true);
    }

    return (

        <>
            <form onSubmit={handleSubmit}>
                <h3>CREA TUS RECETAS</h3>
                <input
                    className="input_nameRecipe"
                    type="text"
                    placeholder='Nombre Receta'
                    value={newName}
                    onChange={(e) => { setNewName(e.target.value) }}
                // disabled={isDisabled}
                />

                <div className="container__ingredient">
                    <input
                        className="input__ingredient"
                        type="text"
                        placeholder="Agregar ingredientes"
                        value={newIngrediente}
                        onChange={(e) => { setNewIngrediente(e.target.value) }}
                    />
                    <button type="button" onClick={handleAddIngredient} className="btn btn-warning button__addIngredient">+</button>

                </div>

                <ul className="ul__addIngredient">
                    {addIngrediente.map((ingrediente, index) => (
                        <li key={index}>
                            {ingrediente} 
                            <button
                            className="btn btn-warning button__removeIngredient"
                                type="button"
                                onClick={() => handleRemoveIngredient(index)}
                            > x </button>
                        </li>
                    ))}
                </ul>

                <textarea
                    className="descriptionRecipe"
                    name=""
                    id=""
                    value={newDescripcion}
                    onChange={(e) => { setNewDescripcion(e.target.value) }}
                ></textarea>

                <button type="submit" className="btn btn-warning button__createRecipe">Crear Receta</button>
            </form>
        </>
    )
}

export default Creator;