import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark text-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            News App
          </a>
          <ul className="navbar-nav d-none d-md-flex flex-row ms-auto">
            <li className="nav-item">Sports</li>
            <li className="nav-item">Weather</li>
            <li className="nav-item">Technology</li>
            <li className="nav-item">Trade</li>
          </ul>
          <button
            className="navbar-toggler d-block d-sm-none"
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
