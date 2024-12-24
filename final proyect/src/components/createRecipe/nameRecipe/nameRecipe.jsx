/* eslint-disable react/prop-types */
import { useState } from "react";
import './nameRecipe.css';


const NameRecipe = ({ agregarTarea }) => {

    let [inputValue, setInputValue] = useState("");
    let [isSubmitted, setIsSubmitted] = useState(false);


    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            let envio = {
                name: inputValue
            };
            agregarTarea(tarea => [...tarea, envio]);
            setIsSubmitted(true);
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Nombre Receta'
                    onChange={onInputChange}
                    disabled={isSubmitted}
                />
                <button
                className="btn btn-warning"
                type="submit"
                disabled = {isSubmitted || !inputValue.trim()}
                >+</button>
            </form>
        </>
    )
}
export default NameRecipe