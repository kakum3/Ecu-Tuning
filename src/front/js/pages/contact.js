import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container m-auto">
            <div className="row py-3">
                <h1>Contáctanos</h1>

                <p>? xD detalles nuestros. Fase 2</p>


            </div>
        </div>


    );
};
