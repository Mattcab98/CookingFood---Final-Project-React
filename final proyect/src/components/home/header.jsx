import './header.css'

const header = () => {
  return (
    <>
        <nav className="container nav navbar navbar-expand-lg">
          <div className="container-fluid container__nav">
            <a className="navbar-brand" id='logo' href="#">CookingFood</a>
            <button
              className="navbar-toggler" id='buttonNav'
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">Recetas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Mis Recetas</a>
                </li>
                <li className="nav-item">
                <button type="button" className="buttonHero btn btn-warning">Sig up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className='container contain__hero'>
          <div className="hero">
          <div className="circleHero"></div>
            <div className="container__txtHero">
              <h4 className='txt__topH1'>Lorem ipsum dolor.</h4>
              <h1>Breackfast</h1>
              <h4 className='txt__bottomH1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate soluta veritatis dignissimos maxime aperiam at, iste beatae? Assumenda, facere voluptatum?</p>
              <button type="button" className="buttonHero btn btn-warning">Create Recipe</button>
            </div>
          </div>
        </section>
    </>
  );
};
export default header
