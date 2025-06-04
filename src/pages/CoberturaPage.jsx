import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox, Polygon } from '@react-google-maps/api';
import '../styles/Cobertura.css';

const apiKey = import.meta.env.VITE_Maps_API_KEY;

const defaultCenter = {
  lat: 19.982561193123207, 
  lng: -103.26352681331763 
};

const coveragePolygonPath = [
 
{lat: 19.9801449, lng: -103.2668147},
{lat: 19.9798425, lng: -103.2667343},
{lat: 19.9799887, lng: -103.2661227},
{lat: 19.9795047, lng: -103.2660476},
{lat: 19.9794139, lng: -103.2669489},
{lat: 19.9790862, lng: -103.266922},
{lat: 19.9791618, lng: -103.2659672},
{lat: 19.9787989, lng: -103.2659243},
{lat: 19.9788241, lng: -103.2657687},
{lat: 19.9789148, lng: -103.2651947},
{lat: 19.9782846, lng: -103.265082},
{lat: 19.9781334, lng: -103.2650552},
{lat: 19.977846, lng: -103.2659457},
{lat: 19.9776242, lng: -103.2658974},
{lat: 19.9778359, lng: -103.2651357},
{lat: 19.9768225, lng: -103.264964},
{lat: 19.9763537, lng: -103.2648514},
{lat: 19.9760814, lng: -103.2648031},
{lat: 19.9760663, lng: -103.2650659},
{lat: 19.9758697, lng: -103.2650445},
{lat: 19.9758848, lng: -103.2647173},
{lat: 19.975915, lng: -103.2644222},
{lat: 19.9759503, lng: -103.263757},
{lat: 19.976157, lng: -103.2612518},
{lat: 19.9743017, lng: -103.2611177},
{lat: 19.9728648, lng: -103.2609944},
{lat: 19.9713775, lng: -103.2608763},
{lat: 19.9713926, lng: -103.2604472},
{lat: 19.9711002, lng: -103.2604955},
{lat: 19.9710497, lng: -103.2603292},
{lat: 19.9720077, lng: -103.2600073},
{lat: 19.9728749, lng: -103.2597605},
{lat: 19.9729354, lng: -103.259267},
{lat: 19.971806, lng: -103.2590578},
{lat: 19.9718564, lng: -103.2586823},
{lat: 19.9729606, lng: -103.258854},
{lat: 19.9737269, lng: -103.2590149},
{lat: 19.9738883, lng: -103.2581727},
{lat: 19.9713573, lng: -103.2579259},
{lat: 19.9713724, lng: -103.2576255},
{lat: 19.9717606, lng: -103.2576845},
{lat: 19.9718615, lng: -103.256338},
{lat: 19.9709741, lng: -103.2562737},
{lat: 19.9710195, lng: -103.255528},
{lat: 19.9702481, lng: -103.2554583},
{lat: 19.9699204, lng: -103.2550667},
{lat: 19.9694868, lng: -103.2546536},
{lat: 19.9694263, lng: -103.2540796},
{lat: 19.9699153, lng: -103.2540957},
{lat: 19.9699355, lng: -103.2538972},
{lat: 19.9706363, lng: -103.2539348},
{lat: 19.9706363, lng: -103.2536022},
{lat: 19.971327, lng: -103.2536451},
{lat: 19.9713926, lng: -103.2532052},
{lat: 19.9721237, lng: -103.2532267},
{lat: 19.9721489, lng: -103.2525508},
{lat: 19.9728446, lng: -103.2526098},
{lat: 19.9729303, lng: -103.2515959},
{lat: 19.973616, lng: -103.2516978},
{lat: 19.9735606, lng: -103.2526688},
{lat: 19.9744933, lng: -103.25276},
{lat: 19.9744832, lng: -103.2534252},
{lat: 19.9754512, lng: -103.253511},
{lat: 19.9752798, lng: -103.2557533},
{lat: 19.9773267, lng: -103.2559464},
{lat: 19.977478, lng: -103.2545034},
{lat: 19.9791921, lng: -103.2545731},
{lat: 19.9795551, lng: -103.2546107},
{lat: 19.9793333, lng: -103.2523147},
{lat: 19.9795853, lng: -103.2522772},
{lat: 19.9798475, lng: -103.2546268},
{lat: 19.9802307, lng: -103.2546643},
{lat: 19.980271, lng: -103.253865},
{lat: 19.9814104, lng: -103.2539187},
{lat: 19.9813852, lng: -103.2547287},
{lat: 19.9823481, lng: -103.2547663},
{lat: 19.9824287, lng: -103.2540796},
{lat: 19.9838454, lng: -103.2540957},
{lat: 19.9838151, lng: -103.2572017},
{lat: 19.9839916, lng: -103.2572554},
{lat: 19.9840521, lng: -103.2571266},
{lat: 19.9843596, lng: -103.256676},
{lat: 19.9844957, lng: -103.2561717},
{lat: 19.984647, lng: -103.2556514},
{lat: 19.9847075, lng: -103.255351},
{lat: 19.9851057, lng: -103.2553885},
{lat: 19.9849948, lng: -103.2557158},
{lat: 19.9862653, lng: -103.2556675},
{lat: 19.9859426, lng: -103.2568691},
{lat: 19.9871072, lng: -103.2559035},
{lat: 19.9884028, lng: -103.254718},
{lat: 19.9909587, lng: -103.2542674},
{lat: 19.9913368, lng: -103.2561181},
{lat: 19.9906965, lng: -103.2562254},
{lat: 19.9908831, lng: -103.2576309},
{lat: 19.9904798, lng: -103.2576684},
{lat: 19.9900563, lng: -103.2577113},
{lat: 19.9901723, lng: -103.2590846},
{lat: 19.9885338, lng: -103.2592509},
{lat: 19.9881104, lng: -103.2552061},
{lat: 19.9865274, lng: -103.2568316},
{lat: 19.9859426, lng: -103.257191},
{lat: 19.98562, lng: -103.2573358},
{lat: 19.9852721, lng: -103.257427},
{lat: 19.985015, lng: -103.2574431},
{lat: 19.9845058, lng: -103.2574377},
{lat: 19.9840924, lng: -103.2574485},
{lat: 19.983674, lng: -103.2576255},
{lat: 19.9832606, lng: -103.2577435},
{lat: 19.9829631, lng: -103.2578776},
{lat: 19.9828573, lng: -103.2586608},
{lat: 19.9828169, lng: -103.2594548},
{lat: 19.9827564, lng: -103.2605169},
{lat: 19.9827363, lng: -103.2607583},
{lat: 19.9828321, lng: -103.2608871},
{lat: 19.9828976, lng: -103.26093},
{lat: 19.9838656, lng: -103.2610319},
{lat: 19.9839815, lng: -103.2610748},
{lat: 19.9839815, lng: -103.2606457},
{lat: 19.9842235, lng: -103.2606564},
{lat: 19.9842185, lng: -103.2611499},
{lat: 19.9842185, lng: -103.2615147},
{lat: 19.9839059, lng: -103.2615093},
{lat: 19.9839412, lng: -103.2612036},
{lat: 19.9827968, lng: -103.2610695},
{lat: 19.9827363, lng: -103.2616005},
{lat: 19.9832555, lng: -103.2616327},
{lat: 19.9833513, lng: -103.2616595},
{lat: 19.983316, lng: -103.2624159},
{lat: 19.9832908, lng: -103.2632045},
{lat: 19.9826657, lng: -103.2631669},
{lat: 19.9826102, lng: -103.2639233},
{lat: 19.9811079, lng: -103.2638321},
{lat: 19.9810323, lng: -103.2647012},
{lat: 19.9803567, lng: -103.26461},
{lat: 19.9803063, lng: -103.2651625},
{lat: 19.9807751, lng: -103.2652001},
{lat: 19.98076, lng: -103.2654361},
{lat: 19.9802508, lng: -103.2653878},
{lat: 19.9802256, lng: -103.2659564},
{lat: 19.9801954, lng: -103.2662568},
{lat: 19.9801449, lng: -103.2668147},
];

const polygonOptions = {
  fillColor: '#007bff', // Color de relleno azul
  fillOpacity: 0.2,     // Transparencia del relleno (0.0 a 1.0)
  strokeColor: '#0056b3', // Color del borde
  strokeOpacity: 0.8,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
};


const CoberturaPage = () => {
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [zoom, setZoom] = useState(13);
  const searchBoxRef = useRef(null);

  const mapOptions = {
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
  };

  const onMapLoad = useCallback(function callback(mapInstance) {
    setMap(mapInstance);
  }, []);

  const onPlacesChanged = useCallback(() => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length === 0) {
      return;
    }

    const firstPlace = places[0];
    const newPosition = {
      lat: firstPlace.geometry.location.lat(),
      lng: firstPlace.geometry.location.lng(),
    };

    setMarkerPosition(newPosition);
    setZoom(15);

    if (map) {
      map.panTo(newPosition);
    }
  }, [map]);

  const onSearchBoxLoad = useCallback((ref) => {
    searchBoxRef.current = ref;
  }, []);

  return (
    <section id="cobertura" className="cobertura-page__main-section">
      <div className="cobertura-page__container">
        <h2 className="cobertura-page__section-title">Nuestra Cobertura: Internet para Concepción de Buenos Aires</h2>

        <p className="cobertura-page__intro-text">
        En Daeteck Network, nos enorgullece llevar fibra optica a Concepción de Buenos Aires. Nuestro compromiso es fortalecer digitalmente nuestra municipio.
        </p>

        <p className="cobertura-page__instruction-text">
          Explora el mapa a continuación para ver nuestra área de servicio delimitada y busca tu dirección para verificar la disponibilidad.
        </p>

        <div className="cobertura-page__map-interactive-area">
          <LoadScript
            googleMapsApiKey={apiKey}
            libraries={['places']}
          >
            <StandaloneSearchBox
              onLoad={onSearchBoxLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder="Busca tu dirección o código postal aquí..."
                className="cobertura-page__search-input"
              />
            </StandaloneSearchBox>

            <GoogleMap
              mapContainerClassName="cobertura-page__map-container"
              center={markerPosition}
              zoom={zoom}
              onLoad={onMapLoad}
              options={mapOptions}
            >
              {/* Marcador de la dirección buscada */}
              {markerPosition && <Marker position={markerPosition} />}

              {/* ¡Aquí se dibuja tu área de cobertura! */}
              {coveragePolygonPath.length > 0 && (
                <Polygon
                  paths={coveragePolygonPath}
                  options={polygonOptions}
                />
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="cobertura-page__check-area">
          <h3>¿Aún tienes dudas sobre nuestra cobertura?</h3>
          <p>
            Si la dirección no aparece o necesitas una verificación más detallada, nuestro equipo está listo para ayudarte.
          </p>
          <p className="cobertura-page__contact-prompt">
            Llámanos al 33 3332 4089 o <a href="/contacto" className="cobertura-page__contact-link">envíanos un mensaje aquí</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CoberturaPage;