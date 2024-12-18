 // Importa el CSS de Font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import './cardRecipe.css'


const cardRecipe = ({img, title, description }) => {

    return (
        <>
            <div className="card">
                <div className="contain__imgCard">
                    <img src={img} alt={title} />
                </div>
                <div className="container__starCard">
                <FontAwesomeIcon icon={faStar} className='starRecipe starRecipe1'/>
                <FontAwesomeIcon icon={faStar} className='starRecipe starRecipe2'/>
                <FontAwesomeIcon icon={faStar} className='starRecipe starRecipe3'/>
                <FontAwesomeIcon icon={faStar} className='starRecipe starRecipe4'/>
                <FontAwesomeIcon icon={faStar} className='starRecipe starRecipe5'/>
                </div>
                <div className="contain__txtCard">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button type="button" className="buttonHero btn btn-warning">Ver Receta</button>
                </div>
            </div>
        </>
    )
}
export default cardRecipe