import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../index";
import LogoWhite from "../svgs/logoWhite";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const { store, actions, setStore } = useAppContext();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const isUser = () =>
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname.includes("profile");
  const doToggle = () => setToggle(!toggle);
  const menuClick = (e) => {
    //const tog = document.getElementById("navbarColor01")
    // const bsCollapse = new bootstrap.Collapse(tog)
    // console.log(bsCollapse)
    // bsCollapse.toggle() Cerrar en menú móvil ?¿
  };
  return (
    <>
      <nav className="position-fixed top-0 w-100 toptop navbar navbar-expand-lg navbar-dark bg-primary py-0 px-3 shadow">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <LogoWhite className="logo-nav" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarColor01"
            onClick={menuClick}
          >
            <ul className="navbar-nav w-100">
              <NavLink
                to="/map"
                className={({ isActive }) =>
                  isActive
                    ? "m-3 p-3 nav-link btn btn-secondary shadow-none text-black text-start"
                    : " shadow-none m-3 p-3 nav-link"
                }
              >
                <i className="fa-solid fa-map-location-dot  fs-4 me-3"></i>
                Talleres
              </NavLink>

              <li className="toptop dropdown-menu-end dropdown text-light my-auto">
                <a
                  className={
                    isUser() === true
                      ? "nav-link dropdown-toggle m-3 p-3 btn btn-secondary shadow-none text-black  text-start"
                      : "nav-link dropdown-toggle shadow-none m-3 p-3"
                  }
                  aria-expanded="false"
                  onClick={doToggle}
                >
                  <i className="fa-solid fa-circle-user fs-4 me-3"></i>Usuario
                </a>
                <ul
                  onClick={doToggle}
                  className={
                    "w-100 shadow dropdown-menu text-small dropdown-menu-end " +
                    (toggle ? "show" : null)
                  }
                >
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
                    <Link
                      onClick={() => actions.removeToken()}
                      className="dropdown-item"
                      to="/"
                    >
                      Salir
                    </Link>
                  </li>
                </ul>
              </li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "m-3 p-3 nav-link btn btn-secondary shadow-none text-black  text-start"
                    : " shadow-none m-3 p-3 nav-link"
                }
              >
                <i className="fa-solid fa-circle-question fs-4 me-3"></i>Ayuda
              </NavLink>
              <button onClick={() => actions.toggleCarAPI()}>CAR API</button>
              <span className=" nav-link d-flex ms-auto me-0 my-3">
                <a className="ms-3 text-muted d-flex" href="#">
                  <i className="fs-4 fa-brands fa-facebook m-auto"></i>
                </a>
                <a className="ms-3 text-muted d-flex" href="#">
                  <i className="fs-4 fa-brands fa-instagram m-auto"></i>
                </a>
                <a className="ms-3 text-muted d-flex" href="#">
                  <i className="fs-4 fa-brands fa-twitter m-auto"></i>
                </a>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
