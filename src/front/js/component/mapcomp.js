import React, { useContext, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import { useAppContext } from "../index";

import Favicon from "../../../../favicon.png";
const center = {
  lat: 39,
  lng: -3,
};

const libs = ["places"];

function Mapcomponent({ center_test }) {
  const { store, actions, setState } = useAppContext();
  useEffect(() => {}, [store.map_markers]);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
      libraries={libs}
    >
      <GoogleMap
        mapContainerStyle={{
          width: "auto",
          height: "86vh",
        }}
        center={center}
        zoom={7}
      >
        {!store.loggedIn ? (
          <Marker
            label={{
              text: "Regístrate",
              fontSize: "1rem",
              fontWeight: "bold",
              marginTop: "2rem",
              color: "black",
              className: "marker-label t-shadow",
            }}
            icon={Favicon}
            position={center}
          />
        ) : store.map_markers[0].w_name === "EMPTY" ? null : (
          store.map_markers.map((e, i) => {
            console.log("rendering: ", e);
            const coincidenceArray = e.w_services.map((e) =>
              store.sel_services[e.id - 1] === undefined
                ? null
                : store.sel_services[e.id - 1].value
                ? true
                : false
            );

            //return coincidenceArray.every((v) => v === true) ? (
              return coincidenceArray.includes(true) ? (
              <Marker
                key={i}
                label={{
                  text: e.w_name,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginTop: "2rem",
                  color: "black",
                  className: "marker-label t-shadow",
                }}
                icon={Favicon}
                position={e}
              />
            ) : null;
          })
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Mapcomponent);
