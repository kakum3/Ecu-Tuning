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
    all_services: [{ name: "ECU", id: 1, value: true }],
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
  const later = () => new Promise((r) => setTimeout(r, 4000));
  useEffect(() => {
    if (store.alert !== null) {
      later().then(() => setStore({ alert: null }));
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [store.alert]);

  useEffect(() => {
    if (store.user_data.user_info.name.length === 1) actions.getProfile();
    setStore({ alert: null });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);
  useEffect(() => {
    if (location.pathname === "/profile")
      setStore({
        sel_services: store.all_services.map((e, i) =>
          store.user_data.taller.w_services.some((a) => e.name === a.name)
            ? { ...e, value: true }
            : { ...e, value: false }
        ),
      });
  }, [location.pathname]);

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
      goHome: function () {
        return navigate("/", { replace: true });
      },
      goMap: function () {
        return navigate("/map", { replace: true });
      },
      setToken: (token) => {
        localStorage.setItem("access_token_jwt", token);
      },

      getToken: () => {
        return localStorage.getItem("access_token_jwt");
      },

      removeToken: () => {
        localStorage.setItem("access_token_jwt", "");
        navigate("/", { replace: true });
        return setStore({
          alert: "Sesión cerrada",
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
      },
      getServices: async function () {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/services");

          const data = await resp.json();
          if (data.msg === "ok") {
            setStore({
              all_services: data.all_services,
            });
            return location.pathname === "/profile"
              ? setStore({
                  all_services: data.all_services,
                  sel_services: data.all_services.map((e, i) =>
                    store.user_data.taller.w_services.some(
                      (a) => e.name === a.name
                    )
                      ? { ...e, value: true }
                      : { ...e, value: false }
                  ),
                })
              : setStore({
                  all_services: data.all_services,
                  sel_services: data.all_services,
                });
          }
        } catch (error) {
          return setStore({
            alert: "Error del servidor cargando servicios",
            loggedIn: false,
          });
        }
        return setStore({
          alert: "Error del servidor cargando servicios",
          loggedIn: false,
        });
      },
      getRestore: async function (data_front) {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/restore", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data_front),
          });
          const data = await resp.json();
          if (data.msg === "ok") {
            return setStore({
              alert: (
                <Link to={"/new/password/" + btoa(data.token)}>EMAIL LINK</Link>
              ),
            });
          }
        } catch (error) {
          return setStore({ alert: "Error del servidor " });
        }
        return setStore({ alert: "Error: Email no encontrado." });
      },
      setNewpassword: async function (data_front, token) {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/new/password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + atob(token),
            },
            body: JSON.stringify(data_front),
          });

          const data = await resp.json();
          if (data.msg === "ok") {
            navigate("/login", { replace: true });
            return setStore({
              user_data: data,
              alert: "Contraseña cambiada, accede ahora a tu cuenta",
            });
          }
        } catch (error) {
          return setStore({
            alert: "Error, las contraseñas no son válidas",
          });
        }
        return setStore({ alert: "Error, prueba otra vez" });
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
            if (data.is_client) {
              navigate("/map", { replace: true });
            } else {
              navigate("/profile", { replace: true });
            }
            return null; //setStore({ alert: "Logeado correctamente", loggedIn: true });
          }
        } catch (error) {
          return setStore({ alert: "Error del servidor", loggedIn: false });
        }
        return setStore({
          alert: "Error: Usuario o contraseña incorrectos.",
          loggedIn: false,
        });
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
            setStore({ alert: "Registrado correctamente" });
            return null;
          }
        } catch (error) {
          return setStore({ alert: "Error del servidor", loggedIn: false });
        }
        return setStore({ alert: "Error de credenciales", loggedIn: false });
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
            return setStore({
              map_markers: data.talleres,
              loggedIn: true,
              sel_services: store.all_services.map((e) => ({
                ...e,
                value: e.name === "ECU" ? true : false,
              })),
            });
          }
        } catch (error) {
          return null; //setStore({
          //alert: "Error cargando Mapa: " + error,
          //loggedIn: false,
          //});
        }
        return null; //setStore({ alert: "Error cargando mapa" }); //, loggedIn: false
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
          if (data.msg === "ok") {
            return setStore({
              user_data: data,
              loggedIn: true,
            });
          }
        } catch (error) {
          return setStore({
            alert: "Error cargando usuario",
            loggedIn: false,
          });
        }
        return setStore({ alert: "Error cargando usuario", loggedIn: false });
      },

      postProfile: async function (data_front) {
        console.log(
          JSON.stringify({
            ...data_front,
            ...{ sel_services: store.sel_services },
          })
        );
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
            alert: "Error Actualizar: Complete todos los campos",
            loggedIn: false,
          });
        }
        return setStore({
          alert: "Error Actualizar desconocido",
          loggedIn: false,
        });
      },
      deleteProfile: async function () {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/profile", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.getToken(),
            },
          });

          const data = await resp.json();
          if (data.msg === "ok") {
            navigate("/", { replace: true });
            return setStore({
              user_data: {
                taller: {
                  w_address: "",
                  w_name: "",
                  w_services: [{ desc: "", name: "", value: true }],
                },
                user_info: { email: "", is_client: false, name: "", image: "" },
              },
              loggedIn: false,
              alert: "Usuario eliminado correctamente",
            });
          }
        } catch (error) {
          return setStore({
            alert: "Error eliminando usuario",
            loggedIn: false,
          });
        }
        return setStore({ alert: "Error eliminando usuario", loggedIn: false });
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
            body: JSON.stringify(data_front),
          });

          const data = await resp.json();
          if (data.msg === "ok") {
            return setStore({
              alert:
                "Mensaje enviado, en breve se pondrá en contacto contigo el taller",
            });
          }
        } catch (error) {
          return setStore({
            alert: "Error enviando mensaje",
          });
        }
        return setStore({ alert: "Error enviando mensaje" });
      },

      /** End of global functions. */
    },

    store: store,
    setStore: (obj) => setStore(obj),
  };
};

export default useFlux;
