import React, { useContext, useState,useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [values, setValues] = useState({ email: 'user2', password: "pass" });
  const navigate = useNavigate();
  const redir = () => navigate("/login", { replace: true });
  useEffect(

    () => { if (store.loggedIn === true) redir() }, [store.loggedIn]
  )
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  

  }
  const formSubmit = (e) => {
    e.preventDefault()
    actions.getSignup(values)
  }
  return (
    <div className="text-center mt-5">
      <h1>Signup Rigo!!</h1>
      <form onSubmit={formSubmit}>
        <input value={values.email} name="email" onChange={handleInputChange} onLoad={handleInputChange} />
        <input value={values.password} name="password" onChange={handleInputChange} onLoad={handleInputChange} />
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};