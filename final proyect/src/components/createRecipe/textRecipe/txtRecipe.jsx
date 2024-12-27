import { useState } from 'react'
import './txtRecipe.css'


const TxtRecipe = ({textareaValue}) => {


    // const [textareaValue, setTextareaValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [estaEditado, setEstaEditado] = useState(false);

    // const onTextareaChange = (event) => {
    //     setTextareaValue(event.target.value)
    // }

    const onSubmit = (event) => {
        event.preventDefault();
        if (textareaValue.trim()) {
            const envio = {
                name: textareaValue
            };
            console.log(envio)
            setIsSubmitted(true);
            setEstaEditado(false)
        }
    }

    const onEdit = () => {
        setEstaEditado(true)
        setIsSubmitted(false)
    }

    return (
        <>
            <form onSubmit={onSubmit} className="container__form-description">
                <div className='container__textarea'>
                    <textarea
                        name="" id=""
                        placeholder='Descripcion Receta'
                        value={textareaValue}
                        // onChange={onTextareaChange}
                        // disabled={isSubmitted && !estaEditado}
                    ></textarea>
                </div>
                {/* <div className='container__button-descrip'>
                    <button
                        className='btn btn-warning btn-descrip1'
                        disabled={isSubmitted || !textareaValue.trim()}
                        type='submit'>
                        {estaEditado ? 'Guardar cambios' : 'Agregar descripcion'}</button>

                    {isSubmitted && !estaEditado && (
                        <button className='btn btn-warning btn-descrip2' onClick={onEdit}>edit</button>
                    )}
                </div> */}
            </form>
        </>
    )
}
export default TxtRecipe