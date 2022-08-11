import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [values, setValues] = useState({ email: "user2", password: "pass" });
  const navigate = useNavigate();
  const redir = () => navigate("/login", { replace: true });
  useEffect(() => {
    if (store.loggedIn === true) redir();
  }, [store.loggedIn]);
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    actions.getSignup(values);
  };
  return (
    <div className="container m-auto">
      {/* //   <h1>Login Rigo!!</h1>
    //   <form onSubmit={formSubmit}>
    //     <input value={values.email} name="email" onChange={handleInputChange} onLoad={handleInputChange} />
    //     <input value={values.password} name="password" onChange={handleInputChange} onLoad={handleInputChange} />
    //     <button type="submit" className="btn btn-primary">Enviar</button>
    //   </form> */}

      <main class="m-auto col-12 col-md-7 col-lg-5 card p-3">
        <form>
          <a href="/" class="fs-1 fa fa-heart text-danger mb-5"></a>
          <h1 className="h3 mb-3 fw-normal">Regístrate</h1>

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
            <label for="floatingInput">Email</label>
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
            <label for="floatingPassword">Contraseña</label>
          </div>

          <div className="mb-3 text-center">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="inlineRadio1">
                Soy un Cliente
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Soy un Taller
              </label>
            </div>
          </div>
          <button className="w-100 btn btn-primary" type="submit">
          Regístrate
          </button>
          <p className="mt-5 mb-3 text-muted">© Fast&Furious</p>
        </form>
      </main>
    </div>
  );
};
