import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/home.css";
import { useAppContext } from "../index";

export const Signup = () => {
  const { store, actions, setState } = useAppContext();
  const [values, setValues] = useState({ name: "", email: "", password: ""});
  const [isClient, setIsClient] = useState(true);

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleCheckChange = e => {
    setIsClient(!isClient)
  }
  const formSubmit = (e) => {
    e.preventDefault();
    actions.getSignup({...values, ["is_client"]: !isClient});
  };
  return (
    <div className="container m-auto">
      {/* //   <h1>Login Rigo!!</h1>
    //   <form onSubmit={formSubmit}>
    //     <input value={values.email} name="email" onChange={handleInputChange} onLoad={handleInputChange} />
    //     <input value={values.password} name="password" onChange={handleInputChange} onLoad={handleInputChange} />
    //     <button type="submit" className="btn btn-primary">Enviar</button>
    //   </form> */}

      <main className="m-auto col-12 col-md-7 col-lg-5 card p-5 rounded shadow">
        <form onSubmit={formSubmit}>
          <img
            src="https://i.ibb.co/0F6ht3r/logofandf.png"
            className="rounded mx-auto d-block mb-5"
            width="100px"
          />
          <div className="form-floating mb-3">
            <input
              value={values.name}
              name="name"
              onChange={handleInputChange}
              onLoad={handleInputChange}
              type="name"
              className="form-control"
              id="floatingName"
              placeholder="Nombre"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={values.email}
              name="email"
              onChange={handleInputChange}
              onLoad={handleInputChange}
              type="email"
              className="form-control"
              id="floatingEmail"
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

          <div className="mb-3 text-center">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="is_client_true"
                checked={isClient}
                onChange={handleCheckChange}
                value=""
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Soy un Cliente
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="is_client_false"
                checked={!isClient}
                onChange={handleCheckChange}
                value=""
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Soy un Taller
              </label>
            </div>
          </div>
          <button className="w-100 btn btn-primary mb-2" type="submit">
            Regístrate
          </button>
          <sub className="col">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="btn btn-link btn-sm">
              Entrar
            </Link>
          </sub>
        </form>
      </main>
    </div>
  );
};
