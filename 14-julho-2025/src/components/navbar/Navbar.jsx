function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary mb-5">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Tech Future
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Quem Somos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Imprensa
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-white" href="http://localhost:5173">
                      Notícias
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Ações
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Campanhas Especiais
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contato
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Pesquise!"
                aria-label="search"
              />
              <button className="btn btn-light" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
