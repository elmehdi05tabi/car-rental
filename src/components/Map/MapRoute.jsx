import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapRoute({ start, end, width, height, isvalid, view }) {
  useEffect(() => {
    if (!start || !end) return;

    // Créer la carte centrée sur la position de départ
    const map = L.map('map').setView(start, view);

    // Ajouter le fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // 🔴 Icône rouge pour le départ
    const startIcon = L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    // 🟢 Icône verte pour l’arrivée
    const endIcon = L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149060.png',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    // Ajouter les marqueurs (affichés tout le temps)
    const startMarker = L.marker(start, { icon: startIcon }).addTo(map);
    const endMarker = L.marker(end, { icon: endIcon }).addTo(map);

    // Si la route est valide, afficher les popups
    if (isvalid) {
      startMarker.bindPopup("Départ").openPopup();
      endMarker.bindPopup("Arrivée");
    }

    // 🔥 Appel API OpenRouteService pour tracer le vrai itinéraire
    const apiKey = '5b3ce3597851110001cf6248b4f3bxxx'; // ← mets ta clé ici
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start[1]},${start[0]}&end=${end[1]},${end[0]}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const coords = data.features[0].geometry.coordinates;
        const latlngs = coords.map(([lon, lat]) => [lat, lon]);

        // Tracer la ligne de la route
        const routeLine = L.polyline(latlngs, {
          color: 'blue',
          weight: 5,
          opacity: 0.8,
        }).addTo(map);

        // Ajuster la vue pour bien voir toute la route
        map.fitBounds(routeLine.getBounds());
      })
      .catch(err => console.error("Erreur API OpenRouteService:", err));

    // Nettoyage
    return () => map.remove();
  }, [start, end, isvalid, view]);

  return (
    <div
      id="map"
      style={{
        height: height,
        width: width,
        marginLeft: '-15px',
      }}
    ></div>
  );
}

export default MapRoute;
