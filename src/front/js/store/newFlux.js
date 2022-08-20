import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
/** Use any React Hook of your choice */

const useFlux = () => {
  const navigate = useNavigate();
  const [store, _setStore] = useState({
    /** Global store objects. */
    alert: null,
    loggedIn: false,
    user_data: null,
    carSearch: null,
    all_services: [{ name: "ECU", value: true }],
    sel_services: [{ name: "ECU", value: true }],
  });

  const setStore = (obj) => _setStore({ ...store, ...obj });
  return {
    actions: {
      /** Global functions. */
      /** Example of a global function. */
      log: function () {
        console.log(store);
      },
      hideTextToggle: function () {
        /** Set and access Flux within Flux. */
        //setStore({ hide: !store.hide });
        this.log(); // access functions inside functions (dont use => functions)
      },
      toggleCarAPI: function() {
        setStore({carSearch: store.carSearch === null ? { model: "Berlingo Turbo", cv: "30", nm: "50", fuel: "10" } : null})
        console.log(store.carSearch)
      },
      setToken: (token) => {
        localStorage.setItem("access_token_jwt", token);
      },

      getToken: () => {
        return localStorage.getItem("access_token_jwt");
      },

      removeToken: () => {
        localStorage.setItem("access_token_jwt", "");
      },
      getLogin: async function (data_front) {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data_front),
          });
          const data = await resp.json();
          if (data.msg === "ok") {
            this.setToken(data.token);
            setStore({ alert: "Logeado correctamente", loggedIn: true });
            return navigate("/protected", { replace: true });
          }
        } catch (error) {
          return setStore({ alert: "Error login: " + error, loggedIn: false });
        }
        return setStore({ alert: "Error", loggedIn: false });
      },
      getSignup: async function (data_front) {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data_front),
          });
          const data = await resp.json();
          if (data.msg === "ok") {
            setStore({ alert: "Registrado correctamente" });
            return navigate("/login", { replace: true });
          }
        } catch (error) {
          return setStore({ alert: "Error Signup: " + error, loggedIn: false });
        }
        return setStore({ alert: "Error", loggedIn: false });
      },
      getProfile: async function (token) {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          });
		  
          const data = await resp.json();
console.log(data) // N!!! Ver
          if (data.msg === "ok") {
            return setStore({ user_data: data, alert: "Usuario cargado", loggedIn: true });
          }
        } catch (error) {
          return setStore({ alert: "Error Usuario: " + error, loggedIn: false });
        }
        return setStore({ alert: "Error cargando usuario", loggedIn: false });
      },
      getServices: async function() {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/services");

          const data = await resp.json();
          const svcs = [{ name: "ECU", value: true }, ...data.all_services]

          return setStore({ all_services: svcs, sel_services: svcs});
        } catch (error) {
          return console.log("Error loading services", error);
        }
      },
      /** End of global functions. */
    },
    store: store,
    setStore: (obj) => setStore(obj),
  };
};

export default useFlux;
