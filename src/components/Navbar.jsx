import React from "react";
import { Link } from "react-router-dom";
import "../assets/Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container-fluid">
        <img
          src="https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=vEaBjBLWUIngT48i8UNo88$daE2N3K4ZzOUsqbU5sYv0$zlkn0$KY$YgP7DnaC5v6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg"
          alt="logo"
          className="logoImg"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/products"} className="nav-link styleLinks">
                VEHICULOS
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link styleLinks">
                DESCUBRI
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busqueda por modelo o vehiculo"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
