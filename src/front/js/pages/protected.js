import React, { useContext, useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export const Protected = () => {
	const { store, actions } = useContext(Context);
	useEffect( () => {
		actions.getProtected(actions.getToken()).then(e=>console.log(e));
	}, [])
	const removeSession = ()=>{
		actions.removeToken();
		return(<Navigate to="/" replace={true} />)
	}
	return (
		<>
			<h1>Protected: {store.loggedIn ? 'Acceso Permitido' : 'Acceso Denegado'}</h1>
			<Link to="/" className="btn btn-primary" onClick={removeSession}>Cerrar Sesion</Link>
		</>
	);
};

