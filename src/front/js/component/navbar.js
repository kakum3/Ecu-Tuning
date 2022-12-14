import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../index";
import LogoWhite from "../svgs/logoWhite";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const { store, actions, setStore } = useAppContext();
  const location = useLocation();
  const isUser = () =>
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname.includes("profile");
    useEffect(() => {
      if (store.user_data.user_info.name === "") actions.getProfile();
    }, [location.pathname]);
  return (
    <>
      <nav className="position-fixed top-0 w-100 toptop navbar navbar-expand-lg navbar-dark bg-primary py-0  px-2 shadow">
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
          >
            <ul className="navbar-nav w-100">
              <NavLink
                to="/map"
                className={({ isActive }) =>
                  isActive
                  ? "rounded  m-2 px-2 nav-link btn btn-secondary shadow-none text-black text-start"
                  : "rounded  m-2 px-2 shadow-none nav-link"
                }
              >
                <i className="fa-solid fa-map-location-dot  fs-4 me-3"></i>
                Talleres
              </NavLink>

              <Link
                to={store.loggedIn ? "/profile" : "/login"}
                className={
                  isUser() === true
                  ? "rounded  m-2 px-2 nav-link btn btn-secondary shadow-none text-black text-start"
                  : "rounded  m-2 px-2 shadow-none nav-link"
                }
                aria-expanded="false"
              >
                <i className="fa-solid fa-circle-user fs-4 me-3"></i>Usuario
              </Link>

              {store.loggedIn ? (
                <a
                  className="rounded  m-2  shadow-none nav-link"
                  onClick={() => actions.removeToken()}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket fs-4 me-3"></i>
                  Salir
                </a>
              ) : null}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "rounded  m-2 px-2 nav-link btn btn-secondary shadow-none text-black text-start"
                    : "rounded  m-2 px-2 shadow-none nav-link"
                }
              >
                <i className="fa-solid fa-circle-question fs-4 me-3"></i>Ayuda
              </NavLink>

              <span className="d-flex ms-auto me-0 my-2">
                <a className="nav-link  px-2" href="https://www.facebook.com/">

                  <i className="fs-4 fa-brands fa-facebook m-auto"></i>
                </a>
                <a className="nav-link  px-2" href="https://www.instagram.com">
                  <i className="fs-4 fa-brands fa-instagram m-auto"></i>
                </a>
                <a className="nav-link  px-2" href="https://twitter.com/">
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
