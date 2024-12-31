import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitch, faWhatsapp, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons' // Importar el ícono

const Footer = () => {
    return (
        <>
            <div className="container__footer">
                <div className="container__logo">
                    <a href="#">CookingFood</a>
                </div>
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
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitch} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faPinterest} />
                </div>
            </div>
        </>
    )
}

export default Footer;
