import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { useAppContext } from "../index";
import Placecomplete from "../component/autocomplete";
import LogoWhite from "../svgs/logoWhite";
export const Signup = () => {
  const { store, actions, setState } = useAppContext();
  const [isClient, setIsClient] = useState(true);

  const handleCheckChange = (e) => {
    setIsClient(!isClient);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const values = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const taller = isClient
      ? {}
      : {
          w_name: e.target.w_name.value,
          w_address: e.target.w_address.value,
          lat: e.target.lat.value,
          lng: e.target.lng.value,
        };
    actions.getSignup({ ...values, ...taller, is_client: isClient });
  };
  return (
    <div className="container m-auto mt-5">
      {/* //   <h1>Login Rigo!!</h1>
    //   <form onSubmit={formSubmit}>
    //     <input value={values.email} name="email" onChange={handleInputChange} onLoad={handleInputChange} />
    //     <input value={values.password} name="password" onChange={handleInputChange} onLoad={handleInputChange} />
    //     <button type="submit" className="btn btn-primary">Enviar</button>
    //   </form> */}
      <div className="text-center mt-5">
        {" "}
        <span className="img-fluid">
          <LogoWhite className="logo-home" />
        </span>
      </div>{" "}
      <main className="m-auto col-12 col-md-8 col-lg-6 card p-5 rounded shadow">
        <h3>Registrarse</h3>
        <hr />
        <form onSubmit={formSubmit}>
          <div className="form-floating mb-3">
            <input
              name="name"
              type="name"
              className="form-control"
              id="floatingName"
              placeholder="Nombre"
            />
            <label htmlFor="floatingInput">Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Contraseña"
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <div className="text-center my-5">
            <div
              className="form-check form-check-inline"
              onClick={handleCheckChange}
            >
              <input
                className="form-check-input"
                type="radio"
                name="is_client_true"
                checked={isClient}
                onChange={handleCheckChange}
                onClick={handleCheckChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Soy un Cliente
              </label>
            </div>
            <div
              className="form-check form-check-inline"
              onClick={handleCheckChange}
            >
              <input
                className="form-check-input"
                type="radio"
                name="is_client_false"
                checked={!isClient}
                onChange={handleCheckChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Soy un Taller
              </label>
            </div>
          </div>
          {isClient ? null : (
            <>
              <div className="form-floating mb-3">
                <input
                  name="w_name"
                  type="name"
                  className="form-control"
                  id="w_name"
                  placeholder="Mecánicos ..."
                />
                <label htmlFor="floatingInput">Nombre del Taller</label>
              </div>

              <Placecomplete />
            </>
          )}
          <button className="w-100 btn btn-primary mb-2" type="submit">
            Regístrate{}
          </button>
          <sub className="d-block">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="btn btn-link btn-sm">
              Entrar
            </Link>
          </sub>
          <sub className="d-block">
            ¿Has perdido acceso a tu cuenta?{" "}
            <Link to="/" className="btn btn-link btn-sm">
              Recuperar
            </Link>
          </sub>
        </form>
      </main>
    </div>
  );
};
