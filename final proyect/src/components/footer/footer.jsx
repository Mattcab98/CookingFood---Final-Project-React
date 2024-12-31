import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitch, faWhatsapp, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons' // Importar el ícono

const Footer = () => {
    return (
        <>
            <div className="container__footer">
                <a className='logo' href="#">CookingFood</a>
                <hr />
                <div className="container__left">
                    <div>
                        <span>Terminos & Condiciones</span>
                        <span> Politicas Privacidad</span>
                    </div>
                    <p>© 2024 Tu Nombre o Tu Empresa. Todos los derechos reservados.</p>
                    <p>Este sitio web y su contenido están protegidos por las leyes de derechos de autor.</p>
                </div>
                <div className="container__right">
                    <FontAwesomeIcon icon={faFacebook}  className='i'/>
                    <FontAwesomeIcon icon={faInstagram}  className='i'/>
                    <FontAwesomeIcon icon={faTwitch}  className='i'/>
                    <FontAwesomeIcon icon={faWhatsapp}  className='i'/>
                    <FontAwesomeIcon icon={faYoutube}  className='i'/>
                    <FontAwesomeIcon icon={faPinterest}  className='i'/>
                </div>
            </div>
        </>
    )
}

export default Footer;
