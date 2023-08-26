import React from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/searchBar";
import NewsLogo from '../../assets/Newsly.jpg'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark text-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={NewsLogo} alt="App Logo" width={150} height={40} />
          </a>
          <button
            className="navbar-toggler d-block d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                News App
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-2 mt-md-0 col-12 col-md-6 ms-auto">
            <SearchBar />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
