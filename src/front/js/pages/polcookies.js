import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

export const PoliticaCookies = () => {
    return (
        <main className="container-fluid">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                <div className="col-md-12 p-lg-5 mx-auto">
                    <h2 className="featurette-heading fw-normal lh-1 text-danger">POLITICA DE COOKIES<span className="text-muted"> Ecu Tuning</span></h2>
                    <p className="lead">Esta política de cookies ha sido creada y actualizada por ....
                        <hr></hr>
                        <h4>¿Qué son las cookies?</h4>

                        Las cookies y tecnologías similares son documentos de texto muy pequeños o fragmentos de código que a menudo contienen un código de identificación único. Cuando usted visita un sitio web o utiliza una aplicación móvil, una computadora le pide permiso a su computadora o dispositivo móvil para guardar este archivo en su computadora o dispositivo móvil y obtener acceso a la información. La información recopilada a través de cookies y tecnologías similares puede incluir la fecha y hora de la visita y la forma en que usted utiliza un sitio web o una aplicación móvil en particular.
                        <hr></hr>
                        <h4>Por qué utilizamos cookies?</h4>
                        Las cookies aseguran que durante su visita a nuestra tienda en línea usted permanezca conectado, que todos los artículos permanezcan almacenados en su carrito de compras, que usted pueda comprar de forma segura y que el sitio web siga funcionando sin problemas. Las cookies también aseguran que podamos ver cómo se utiliza nuestro sitio web y cómo podemos mejorarlo. Además, dependiendo de sus preferencias, nuestras propias cookies pueden ser utilizadas para presentarle anuncios específicos que coincidan con sus intereses personales.
                        <hr></hr>
                        <h4>¿Qué tipo de cookies utilizamos?</h4>
                        <p></p>
                        <h6><strong>Cookies necesarias</strong></h6>
                        Estas cookies son necesarias para que el sitio web funcione correctamente. Algunas de las siguientes acciones se pueden realizar utilizando estas cookies: - Almacenar artículos en un carrito de compras para compras en línea - Guardar sus preferencias de cookies para este sitio web - Guardar preferencias de idioma - Iniciar sesión en nuestro portal. Tenemos que comprobar si ha iniciado sesión.
                        <br></br>
                        <p></p>
                        <h6><strong>Cookies funcionales</strong></h6>
                        Estas cookies permiten una mayor funcionalidad para los visitantes de nuestro sitio web. Estas cookies pueden ser establecidas por nuestros proveedores de servicios externos o por nuestro propio sitio web. Las siguientes funcionalidades pueden o no ser activadas cuando usted acepte esta categoría.\N- Servicios de chat en vivo - Ver videos en línea - Botones para compartir medios sociales - Iniciar sesión en nuestro sitio web con medios sociales.
                        <p></p>
                        <h6><strong>Publicidad / cookies de seguimiento</strong></h6>
                        Estas cookies son establecidas por socios publicitarios externos y se utilizan para crear perfiles y realizar un seguimiento de los datos en varios sitios web. Si usted acepta estas cookies, podemos mostrar nuestros anuncios en otros sitios web en función de su perfil de usuario y preferencias. Estas cookies también guardan datos sobre cuántos visitantes han visto o hecho clic en nuestros anuncios con el fin de optimizar las campañas publicitarias.
                        <p></p>
                        <h6><strong>Sin clasificar</strong></h6>
                        Estas cookies están todavía en proceso de clasificación. Aparecerán en una de las siguientes categorías: Necesario, Performance, Funcional o Publicidad.
                        <hr></hr>
                        <h4>¿Cómo puedo desactivar o eliminar las cookies?</h4>
                        Usted puede optar por no utilizar todas las cookies, excepto las necesarias. En la configuración del navegador, puede cambiar la configuración para asegurarse de que se bloqueen las cookies. La mayoría de los navegadores le ofrecen una explicación sobre cómo hacerlo en la llamada'función de ayuda'. Sin embargo, si bloquea las cookies, es posible que no pueda disfrutar de todas las características técnicas que nuestro sitio web tiene para ofrecer y puede afectar negativamente a su experiencia de usuario.</p>
                </div>
            </div>
        </main >
    );
}