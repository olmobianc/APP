import React, { useState, useEffect } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoib2xtbzk1IiwiYSI6ImNreGtqd3c3aTE3YzYycXViMW1xZ2NwNHcifQ.-6KPm5u6FHFcoCkl0UuLIw'; // your Mapbox token

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -33.8908,   // Default to Bondi Beach
    longitude: 151.2742,
    zoom: 13,
  });

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: 'map', // The ID of the container div
      style: 'mapbox://styles/mapbox/streets-v11',
      accessToken: MAPBOX_TOKEN,
      center: [viewport.longitude, viewport.latitude],
      zoom: viewport.zoom,
    });

    // Initialize the geocoder control
    const geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_TOKEN,
      mapboxgl: mapboxgl,
      marker: true,
      placeholder: 'Search for a place',
      proximity: 'ip', // Proximity search based on IP
    });

    // Add the geocoder to the map
    map.addControl(geocoder, 'top-left');

    geocoder.on('result', (e) => {
      const result = e.result.geometry;
      setViewport({
        latitude: -33.8908,   // Bondi Beach Latitude
        longitude: 151.2742,  // Bondi Beach Longitude
        zoom: 10,
      });
      map.flyTo({
        center: [result.coordinates[0], result.coordinates[1]],
        essential: true, // only animate if necessary
      });
    });

    return () => {
      map.remove();
    };
  }, [viewport.latitude, viewport.longitude, viewport.zoom]);

  return (
    <div className='map-container'>
      <div id="map"></div>
    </div>
  );
};

export default Map;
