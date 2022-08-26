import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../index";

export const ImageUp = () => {
  const { store, actions, setStore } = useAppContext();
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e);
    try {
      // fetching data from the backend
      const resp = await fetch(process.env.BACKEND_URL + "/upload", {
        method: "POST",
        body: e.target,
      });
      const data = await resp.json();
      if (data.msg === "ok") {
        return setStore({ alert: "Imagen Actualizado", user_data: data }); //Reset user data
      }
    } catch (error) {
      return setStore({
        alert: "Error Actualizar Imgen: " + error,
        loggedIn: false,
      });
    }
    return setStore({
      alert: "Error Actualizar Imagen desconocido",
      loggedIn: false,
    });
  };
  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <input type="file" name="file" accept="image/*" defaultValue={""} />
    <button type="submit">AUP</button>
    </form>
  );
};
export default ImageUp;
