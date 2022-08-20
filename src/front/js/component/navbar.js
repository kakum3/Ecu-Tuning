import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../index";

export const Navbar = () => {
  const { store, actions, setStore } = useAppContext();
  return (
    <nav className="text-bg-dark shadow">
      <div className="container">
        <div className="d-flex">
          <ul className="nav">
            <Link to="/">
              <img
                src="https://i.ibb.co/0F6ht3r/logofandf.png"
                className="rounded d-block m-0"
                width="66px"
              />
            </Link>
            <Link className="text-white m-auto" to="/map">
              <i className="fa-solid fa-car-on mx-3">Talleres</i>
            </Link>

            <div className="form-check form-switch">
              <input
                onChange={()=>actions.toggleCarAPI()}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                DEV: Apisearch
              </label>
            </div>
          </ul>
          <span className="ms-auto d-flex me-3">
            <a className="ms-3 text-muted d-flex" href="#">
              <i className="fa-brands fa-facebook m-auto"></i>
            </a>
            <a className="ms-3 text-muted d-flex" href="#">
              <i className="fa-brands fa-instagram m-auto"></i>
            </a>
            <a className="ms-3 text-muted d-flex" href="#">
              <i className="fa-brands fa-twitter m-auto"></i>
            </a>
          </span>
          <div className="dropdown-menu-end dropdown text-light my-auto">
            <a
              href="#"
              className="d-block link-light text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul className="shadow dropdown-menu text-small">
              <li>
                <Link className="dropdown-item" to="/login">
                  Entrar
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/signup">
                  Registrarse
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile">
                  Perfil
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Salir
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/contact">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
