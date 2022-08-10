import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contac = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container m-auto">
            <div className="row py-3">
                <h1>Contactanos</h1>

                <p>*Bootstrap
                    Input: Nombre

                    Formulario contacto</p>


            </div>
        </div>


    );
};
