import { NavLink } from "react-router";

function MainMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Surf Shop</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contato</NavLink>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Busque seu produto" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            </div>
        </div>
    </nav>
  );
}

export default MainMenu;