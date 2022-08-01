import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navigate, Link } from "react-router-dom";

export const Protected = () => {
	const { store, actions } = useContext(Context);
	useEffect( () => {
		actions.getProtected(actions.getToken());
	}, [])
	const handleSesion = ()=>{
		actions.removeToken();
		return(<Navigate to="/" replace={true} />)
	}
	return (
		<div className="text-center mt-5">
			<h1>Protected: {store.loggedIn.email ? store.loggedIn.pasword : 'Acceso Denegado'}</h1>
			<Link to="/" className="btn btn-primary" onClick={handleSesion}>Cerrar Sesion</Link>
		</div>
	);
};

