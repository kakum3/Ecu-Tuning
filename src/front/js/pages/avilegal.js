import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

export const AvisoLegal = () => {
    return (
        <main className="container-fluid">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                <div className="col-md-12 p-lg-5 mx-auto">
                    <h2 className="featurette-heading fw-normal lh-1 text-danger">AVISO LEGAL<span className="text-muted"> Ecu Tuning</span></h2>
                    En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web https://www.ecutuning.com/, le informa de lo siguiente:
                    <p>• Denominación social: Ecu Tuning</p>
                    <p>• NIF: 00000000-A</p>
                    <p>• Domicilio: Calle Ecu Tuning, 13</p>
                    <p>Con los límites establecidos en la ley, https://www.ecutuning.com no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones que se contienen en sus páginas de Internet. Los contenidos e información no vinculan a https://www.ecutuning.com/ ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido con carácter informativo y divulgativo.</p>
                    <p>Las páginas de Internet de https://www.ecutuning.com/ pueden contener enlaces (links) a otras páginas de terceras partes que https://www.ecutuning.com/ no puede controlar. Por lo tanto, https://www.ecutuning.com/ no puede asumir responsabilidades por el contenido que pueda aparecer en páginas de terceros.</p>
                    <p>Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este website son propiedad exclusiva de https://www.ecutuning.com/ o sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o parcial, debe contar con el consentimiento expreso de https://www.ecutuning.com/.</p>
                    <p>Para acceder a algunos de los servicios que https://www.ecutuning.com/ ofrece a través del website deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos le informamos que, mediante la cumplimentación de los presentes formularios, sus datos personales quedarán incorporados y serán tratados en los ficheros de Ecu Tuning con el fin de poderle prestar y ofrecer nuestros servicios así como para informarle de las mejoras del sitio Web.</p>
                    <p>Asimismo, le informamos de la posibilidad de que ejerza los derechos de acceso, rectificación, cancelación y oposición de sus datos de carácter personal, manera gratuita mediante email a administracion@ecutuning.com o en la dirección Calle Ecu Tuning, 13</p>
                </div>
            </div>
        </main>
    );
}