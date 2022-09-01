import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { useAppContext } from "../index";
import LogoWhite from "../svgs/logoWhite";
export const Login = () => {
  const { store, actions, setState } = useAppContext();
  const [values, setValues] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    actions.getLogin(values);
  };
  return (
    <main className="container">
      <div className="text-center">
        {" "}
        <span className="img-fluid">
          <LogoWhite className="logo-home" />
        </span>
      </div>
      <div className="m-auto col-12 col-md-8 col-lg-6 card p-5 rounded shadow">
        <h3>Entrar</h3>
        <hr />
        <form onSubmit={formSubmit}>
          <div className="form-floating mb-3">
            <input
              value={values.email}
              name="email"
              onChange={handleInputChange}
              onLoad={handleInputChange}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={values.password}
              name="password"
              onChange={handleInputChange}
              onLoad={handleInputChange}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <button className="w-100 btn btn-primary mb-2" type="submit">
            Entra
          </button>
          <sub className="d-block">
            ¿No tienes una cuenta?{" "}
            <Link to="/signup" className="btn btn-link btn-sm">
              Regístrate
            </Link>
          </sub>
          <sub className="d-block">
            ¿Has perdido acceso a tu cuenta?{" "}
            <Link to="/restore" className="btn btn-link btn-sm">
              Recuperar
            </Link>
          </sub>
        </form>
      </div>
    </main>
  );
};
