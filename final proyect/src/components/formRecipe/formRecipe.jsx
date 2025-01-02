import { useEffect, useState } from 'react';
import './formRecipe.css';
import Creator from './creator';
import { Outlet } from 'react-router-dom';

const FormRecipe = () => {
    const [taskItems, setTaskItems] = useState([]);
    const [newId, setNewId] = useState(1);

    useEffect(() => {
        const historyRecipes = JSON.parse(localStorage.getItem('receta'));
        if (historyRecipes) {
            const updatedRecipes = historyRecipes.map((receta, index) => ({
                ...receta, id: receta.id || (index + 1)
            }));

            setTaskItems(updatedRecipes);

            const maxId = updatedRecipes.reduce((max, receta) => (receta.id > max ? receta.id : max), 0);
            setNewId(maxId + 1);
        }
    }, []);

    const cambiarId = () => {
        setNewId(newId + 1);
    };

    const createReceta = (crearReceta) => {
        const recetaConId = { ...crearReceta, id: newId };

        // Verificar si la receta ya existe
        if (!taskItems.find((item) => item.name === crearReceta.name)) {
            const updatedTasks = [...taskItems, recetaConId];
            setTaskItems(updatedTasks);
            cambiarId();
            localStorage.setItem('receta', JSON.stringify(updatedTasks));
        }
    };

    return (
        <>
            <div className="container__creator">
                <Creator createReceta={createReceta} />
            </div>
            <h3 className='misRecetasCreadas'>MIS RECETAS CREADAS</h3>
            <div className="container__miReceta">
                {taskItems.length > 0 ? (
                    taskItems.map((receta) => (
                        (receta.name.trim() !== '' && receta.descripcion.trim() !== '' && receta.ingrediente.trim() !== '') ? (
                            <div key={receta.id} className="miReceta">
                                <p className='recetaId'>Receta número: {receta.id}</p>
                                <h3>{receta.name}</h3>
                                <p className='descripRecipe'>{receta.descripcion}</p>
                                <div className="ingredientes">
                                    <h3>Ingredientes:</h3>
                                    {receta.ingrediente.split('\n').map((ing, id) => (
                                        <p key={id}>{ing}</p>
                                    ))}
                                </div>
                            </div>
                        ) : null
                    ))
                ) : (
                    <p>No hay recetas guardadas en el historial.</p>
                )}
            </div>
        </>
    );
};

export default FormRecipe;
