import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoib2xtbzk1IiwiYSI6ImNreGtqd3c3aTE3YzYycXViMW1xZ2NwNHcifQ.-6KPm5u6FHFcoCkl0UuLIw';

const Map = ({ selectedCity }) => {
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      accessToken: MAPBOX_TOKEN,
      center: [151.2093, -33.8908], // Default to Sydney
      zoom: 5,
    });

    setMapInstance(map);

    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (
      mapInstance &&
      selectedCity &&
      typeof selectedCity.latitude === 'number' &&
      typeof selectedCity.longitude === 'number' &&
      selectedCity.latitude >= -90 &&
      selectedCity.latitude <= 90 &&
      selectedCity.longitude >= -180 &&
      selectedCity.longitude <= 180
    ) {
      // Fly to the selected location
      mapInstance.flyTo({
        center: [selectedCity.longitude, selectedCity.latitude],
        zoom: 12,
      });
    } else if (selectedCity) {
      console.warn('Invalid latitude or longitude values:', selectedCity);
    }
  }, [mapInstance, selectedCity]);

  return (
    <div className='map-container'>
      <div id="map"></div>
    </div>
  );
};

export default Map;
