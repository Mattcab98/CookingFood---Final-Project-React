import './sectionProduct.css'
import Card from './card/card'
import Camisa_Verde from './images/camisa_verde.jpg'
import Camisa_Roja from './images/camisa_roja.jpg'
import Jean_Azul from './images/jean_azul.jpg'

const product = [
    {
        idProduct: 1,
        image: Camisa_Verde,
        name: 'Camisa Verde',
        price: 35000
    },
    {
        idProduct: 2,
        image: Camisa_Roja,
        name: 'Camisa Roja',
        price: 35000
    },
    {
        idProduct: 3,
        image: Jean_Azul,
        name: 'Jean Azul',
        price: 42000
    },
];

const SectionProduct = () => {
    return (
            <div className="container__product">
                {product.map((product) => (
                    <Card
                        key = {product.idProduct}
                        idProduct = {product.idProduct}
                        image = {product.image}
                        name = {product.name}
                        price = {product.price}
                    />
                ))}
            </div>
    )
}
export default SectionProduct;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';