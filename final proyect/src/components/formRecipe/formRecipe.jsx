import { useState, useEffect } from 'react'
import './formRecipe.css'
import Creator from './creator';


const FormRecipe = () => {

    const [taskItems, setTaskItems] = useState([]);
    const [newId, setNewId] = useState(1);

    let createReceta = (crearReceta) => {
        const recetaId = {...crearReceta, id: newId}

        if (!taskItems.find(items => items.name === recetaId.name)) {
            setTaskItems([...taskItems, recetaId]);
            setNewId(newId + 1);
        }
    };

    useEffect (() => {
        const historyRecipe = JSON.parse(localStorage.getItem('receta')) || [];
        setTaskItems(historyRecipe);
        if (historyRecipe.length > 0) {
            const lastRecipe = historyRecipe[historyRecipe.length - 1];
            setNewId(lastRecipe + 1)
        }
    }, []);

    useEffect (() => {
        if (taskItems.length > 0) {
            localStorage.setItem('taskItems', JSON.stringify(taskItems));
        }
    }, [taskItems])

    return (
        <>
            <div className="container__creator">
                <Creator createReceta={createReceta} />
                <div className="container__miReceta">
                    {taskItems.map((receta, index) => (
                        <div key={receta.id} className="miReceta">
                            <div className="container__img">
                                <img src="" alt="" />
                            </div>
                            <h3>{receta.name}</h3>
                            <p>{receta.descripcion}</p>

                            <div className="ingredientes">
                                <h5>ingredientes:</h5>
                                {receta.ingrediente.split('\n').map((ing, id) => (<p key={id}>{ing}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default FormRecipe