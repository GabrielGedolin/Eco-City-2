import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    // Inicializa o mapa apenas no cliente
    const map = L.map('map', {
      center: [-22.12035889198807, -51.38949783562705], // Coordenadas do SENAI
      zoom: 17, // Zoom inicial
      minZoom: 17, // Zoom mínimo permitido
      maxZoom: 19, // Zoom máximo permitido
      maxBounds: L.latLngBounds(
        [-22.12035889198807, -51.38949783562705], // Canto superior esquerdo
        [-22.12035889198807, -51.38949783562705] // Canto inferior direito
      ),
      maxBoundsViscosity: 1.0, // Evita que o mapa "escape" dos limites
    });

    // Adiciona os tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Ícone personalizado para o ponto de coleta
    const pointIcon = L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png', // Ícone de ponto
      iconSize: [32, 32], // Tamanho do ícone
      iconAnchor: [16, 32], // Posição da âncora do ícone
      popupAnchor: [0, -32], // Posição do popup em relação ao ícone
    });

    // Adicionar um marcador no SENAI
    L.marker([-22.1206, -51.4059], { icon: pointIcon })
      .addTo(map)
      .bindPopup('📍 Ponto de Coleta - SENAI Presidente Prudente');

    // Adicionar evento de clique para expandir/recolher o mapa
    const mapContainer = document.getElementById('map-container');
    const mapDiv = document.getElementById('map');

    if (mapContainer && mapDiv) {
      mapContainer.addEventListener('click', () => {
        if (!mapContainer.classList.contains('expanded')) {
          // Expandindo o mapa
          mapContainer.classList.add('expanded');
          mapContainer.style.position = 'fixed';
          mapContainer.style.top = '0';
          mapContainer.style.left = '0';
          mapContainer.style.width = '100vw';
          mapContainer.style.height = '100vh';
          mapContainer.style.zIndex = '9999';
          mapDiv.style.borderRadius = '0'; // Removendo o border-radius ao expandir
        } else {
          // Revertendo a expansão
          mapContainer.classList.remove('expanded');
          mapContainer.style.position = 'relative';
          mapContainer.style.width = '100%';
          mapContainer.style.height = '400px';
          mapDiv.style.borderRadius = '10%'; // Restaurando o border-radius
        }
      });
    }
  }, []);

  return (
    <div
      id="map-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        borderRadius: '10%',
        cursor: 'pointer',
      }}
    >
      <div
        id="map"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10%',
          transition: 'all 0.3s ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default MapComponent;
