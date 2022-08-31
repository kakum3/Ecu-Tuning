import React, { useEffect, useState } from "react";

import { useNavigate, useLocation, Link } from "react-router-dom";
/** Use any React Hook of your choice */

const useFlux = () => {
  const [store, _setStore] = useState({
    /** Global store objects. */
    alert: null,
    loggedIn: false,
    carSearch: null,
    map_markers: [
      {
        lat: 0,
        lng: 0,
        w_name: "EMPTY",
      },
    ],
    all_services: [{ name: "EMPTY", id: 1, value: true }],
    sel_services: [{ name: "EMPTY", id: 1, value: true }],
    user_data: {
      taller: {
        w_address: "",
        w_name: "",
        w_services: [{ desc: "", name: "", value: true }],
      },
      user_info: { email: "", is_client: false, name: "", image: "" },
    },
  });
  const setStore = (obj) => _setStore({ ...store, ...obj });
  //on render(middle) and consts
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (store.alert !== null) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [store.alert]);
  useEffect(() => {
    setStore({ alert: null });
    if (location.pathname === "/profile")
      setStore({
        sel_services: store.all_services.map((e, i) =>
          store.user_data.taller.w_services.some((a) => e.name === a.name)
            ? { ...e, value: true }
            : { ...e, value: false }
        ),
      });
    if (location.pathname === "/map")
      setStore({
        sel_services: store.all_services.map((e) => ({
          ...e,
          value: e.name === "ECU" ? true : false,
        })),
      });
  }, [
    location.pathname,
    store.user_data,
    store.all_services,
    store.map_markers,
  ]);

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
      toggleCarAPI: function () {
        setStore({
          carSearch:
            store.carSearch === null
              ? { model: "Berlingo Turbo", cv: "30", nm: "50", fuel: "10" }
              : null,
        });
        console.log(store.carSearch);
      },
      setToken: (token) => {
        localStorage.setItem("access_token_jwt", token);
      },

      getToken: () => {
        return localStorage.getItem("access_token_jwt");
      },

      removeToken: () => {
        localStorage.setItem("access_token_jwt", "");
        setStore({
          loggedIn: false,
          user_data: {
            taller: {
              w_address: "",
              w_name: "",
              w_services: [{ desc: "", name: "", value: true }],
            },
            user_info: { email: "", is_client: false, name: "", image: "" },
          },
        });
        return navigate("/", { replace: true });
      },
      getServices: async function () {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/services");

          const data = await resp.json();
          if (data.msg === "ok") {
            return setStore({
              all_services: data.all_services,
              sel_services: data.all_services,
            });
          }
        } catch (error) {
          return setStore({
            alert: "Error cargando servicios: " + error,
            loggedIn: false,
          });
        }
        return setStore({ alert: "Error cargando servicios", loggedIn: false });
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
            navigate("/profile", { replace: true });
            return setStore({ alert: "Logeado correctamente", loggedIn: true });
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
            navigate("/login", { replace: true });
            return setStore({ alert: "Registrado correctamente" });
          }
        } catch (error) {
          return setStore({ alert: "Error Signup: " + error, loggedIn: false });
        }
        return setStore({ alert: "Error", loggedIn: false });
      },

      getMap: async function () {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/map", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            },
          });

          const data = await resp.json();
          if (data.msg === "ok") {
            console.log(data);
            return setStore({
              map_markers: data.talleres,
              alert: "Mapa Cargado",
              loggedIn: true,
            });
          }
        } catch (error) {
          return setStore({
            alert: "Error cargando Mapa: " + error,
            //loggedIn: false,
          });
        }
        return setStore({ alert: "Error cargando mapa" }); //, loggedIn: false
      },

      getProfile: async function () {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            },
          });

          const data = await resp.json();
          console.log(data); // N!!! Ver
          if (data.msg === "ok") {
            return setStore({
              user_data: data,
              alert: "Usuario cargado",
              loggedIn: true,
            });
          }
        } catch (error) {
          return setStore({
            alert: "Error Usuario: " + error,
            loggedIn: false,
          });
        }
        return setStore({ alert: "Error cargando usuario", loggedIn: false });
      },

      postProfile: async function (data_front) {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/profile", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            },
            body: JSON.stringify({
              ...data_front,
              ...{ sel_services: store.sel_services },
            }),
          });
          const data = await resp.json();
          if (data.msg === "ok") {
            return setStore({ alert: "Perfil Actualizado", user_data: data }); //Reset user data
          }
        } catch (error) {
          return setStore({
            alert: "Error Actualizar: " + error,
            loggedIn: false,
          });
        }
        return setStore({
          alert: "Error Actualizar desconocido",
          loggedIn: false,
        });
      },
      
      getMensaje: async function (data_front) {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            },
            body: JSON.stringify(data_front)
          });

          const data = await resp.json();
          console.log(data); // N!!! Ver
          if (data.msg === "ok") {
            return setStore({
              
              alert: "Mensaje Enviado",
              
            });
          }
        } catch (error) {
          return setStore({
            alert: "Error enviando mensaje " + error,
            
          });
        }
        return setStore({ alert: "Error enviando"});
      },

      /** End of global functions. */
    },

    store: store,
    setStore: (obj) => setStore(obj),
  };
};

export default useFlux;
