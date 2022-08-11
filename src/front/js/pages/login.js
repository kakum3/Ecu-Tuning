import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const redir = () => navigate("/protected", { replace: true });
  useEffect(() => {
    if (store.loggedIn === true) redir();
  }, [store.loggedIn]);
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    actions.getLogin(values);
  };
  return (
    <div className="container m-auto">
      <main class="m-auto col-12 col-md-7 col-lg-5 card p-3">
        <form>
          <a href="/" class="fs-1 fa fa-heart text-danger mb-5"></a>
          <h1 className="h3 mb-3 fw-normal">Entra</h1>

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

          <button className="w-100 btn btn-primary" type="submit">
            Entra
          </button>
          <p className="mt-5 mb-3 text-muted">© Fast&Furious</p>
        </form>
      </main>
    </div>
  );
};
