import React, { useContext, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import { useAppContext } from "../index";

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
          height: "80vh",
        }}
        center={center}
        zoom={7}
      >
        {!store.loggedIn ? (
          <Marker
            label="Regístrese para ver talleres cercanos"
            position={center}
          />
        ) : store.map_markers[0].w_name === "EMPTY" ? null : (
          store.map_markers.map((e, i) => {
            console.log("rendering: ", e)
            const coincidenceArray = e.w_services.map((e) =>
              store.sel_services[e.id - 1] === undefined
                ? null
                : store.sel_services[e.id - 1].value
                ? true
                : false
            );

            return coincidenceArray.every((v) => v === true) ? (<Marker key={i} label={e.w_name} position={e} />
            ) : null;
          })
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Mapcomponent);
