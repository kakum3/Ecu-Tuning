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
    <div className="container card w-90 m-auto">
      {/* //   <h1>Login Rigo!!</h1>
    //   <form onSubmit={formSubmit}>
    //     <input value={values.email} name="email" onChange={handleInputChange} onLoad={handleInputChange} />
    //     <input value={values.password} name="password" onChange={handleInputChange} onLoad={handleInputChange} />
    //     <button type="submit" className="btn btn-primary">Enviar</button>
    //   </form> */}


      <main class="form-signin m-auto">
        <form>
          <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Registrate</h1>

          <div className="form-floating">
            <input value={values.email} name="email" onChange={handleInputChange} onLoad={handleInputChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input value={values.password} name="password" onChange={handleInputChange} onLoad={handleInputChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Contraseña</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              {/* <input type="checkbox" value="remember-me" /> Recuerdame */}
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Registrar</button>
          <p className="mt-5 mb-3 text-muted">© Fast&Furious</p>
        </form>
      </main>
    </div >
  );
};
