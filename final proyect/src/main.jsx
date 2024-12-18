import React from 'react';
import ReactDOM from 'react-dom/client';

// Importar los archivos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';    // Para los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Para los scripts de Bootstrap

// Importar los archivos de FontAwesomeIcon



import './main.css';
import Header from './components/home/header';
import RecipeTop from './components/recipeTop/recipeTop';
import CreateRecipe from './components/createRecipe/createRecipe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RecipeTop />
    <CreateRecipe />               
  </React.StrictMode>
);
