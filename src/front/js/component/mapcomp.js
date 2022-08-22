import React, { useContext } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import { Context } from "../store/appContext";

const center = {
  lat: 39,
  lng: -3,
};

const locations = [
  {
    lat: 39,
    lng: -3,
  },
];

const onLoad = () => { };
const onPlaceChanged = () => { };

function MyComponent() {
  const { store, actions } = useContext(Context);

  const onLoad = ref => window.Autocomplete = ref;
  const onPlacesChanged = () => console.log(window.Autocomplete.gm_accessors_.place.Uj.place.geometry.location.lng());
  return (
    <LoadScript googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg" libraries={["places"]}>
      <Autocomplete restrictions={ { country: "es" } }
      fields={["formatted_address", "geometry.location", "name"]}
      types={["establishment"]}
      onLoad={onLoad}
        onPlaceChanged={onPlacesChanged}><><input className="w-100"/><sub>Introduce calle y núm</sub></></Autocomplete>
      <GoogleMap
        mapContainerStyle={{
          width: "auto",
          height: "100vh",
        }}
        center={center}
        zoom={10} w
      >
        {!store.loggedIn ? (
          <Marker label="Regístrese para ver talleres cercanos" position={locations[0]} />
        ) : (
          locations.map((e) => <Marker label="Taller Paco" position={e} />)
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
