import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../index";

export const ImageUp = () => {
  const { store, actions, setStore } = useAppContext();
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // fetching data from the backend
      const resp = await fetch(process.env.BACKEND_URL + "/upload", {
        headers: {
          Authorization: "Bearer " + actions.getToken(),
        },
        method: "POST",
        body: new FormData(e.target),
      });
      const data = await resp.json();
      if (data.msg === "ok") {
        return setStore({ alert: "Imagen Actualizada" }); //Reset user data
      }
    } catch (error) {
      return setStore({
        alert: "Error Actualizar Imgen: " + error,
      });
    }
    return setStore({
      alert: "Error Actualizar Imagen desconocido",
    });
  };
  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Subir"
          />
          <button
            className="btn btn-primary"
            type="submit"
            id="inputGroupFileAddon04"
          >
            Subir
          </button>
        </div>
      </form>
      <div className="text-center">
        {
          <img
            className="rounded shadow figure"
            src={
              file
                ? file
                : {...store.user_data.user_info}.image === "" || {...store.user_data.user_info}.image === null
                ? "https://i.ibb.co/KNZ0Yx1/ecubk.png"
                : process.env.BACKEND_URL +
                  "/images/" +
                  store.user_data.user_info.image
            }
            alt="Profile"
          />
        }
      </div>
    </>
  );
};
export default ImageUp;
