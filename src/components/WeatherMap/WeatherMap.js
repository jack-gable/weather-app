import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function WeatherMap({ latitude = 51.5072, longitude = 0.1276 }) {
	const position = [latitude, longitude];

	const markerIcon = new L.Icon({
		iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
		iconRetinaUrl:
			"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
		shadowSize: [41, 41],
	});

	return (
		<>
			<MapContainer
				center={position}
				zoom={13}
				style={{ width: 400, height: 500, margin: "0 auto", borderRadius: 10 }}
				key={`${latitude}-${longitude}`}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="Map data © OpenStreetMap contributors"
				/>
				<Marker position={position} icon={markerIcon} />
			</MapContainer>
		</>
	);
}
