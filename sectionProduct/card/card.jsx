import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './card.css'

const Card = ({ idProduct, image, name, price }) => {
  return (
    <>
      <div className='card'>
        <div className="contain__imgCard">
          <img src={image} alt={name} />
        </div>
        <div className="contian__txtCard">
          <h2>{name}</h2>
          <p>$ {price}</p>
          <button className='button__card'>
            AÑADIR <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  idProduct: PropTypes.number.isRequired, // idProduct como string, obligatorio
  image: PropTypes.string.isRequired,  // La propiedad 'image' debe ser un string y es obligatoria
  name: PropTypes.string.isRequired,   // La propiedad 'name' debe ser un string y es obligatoria
  price: PropTypes.number.isRequired,  // La propiedad 'price' debe ser un número y es obligatoria
};

export default Card;