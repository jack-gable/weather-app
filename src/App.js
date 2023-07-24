import React from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import WeatherItem from "./components/WeatherItem";
import WeatherItemShelf from "./components/WeatherItemShelf";
import Search from "./components/Search";
import { weatherContext } from "./WeatherProvider";
import WeatherMap from "./components/WeatherMap/WeatherMap";

function App() {
	const { forecastData, cityLatLon } = React.useContext(weatherContext);
	return (
		<main>
			<Header />
			<Search />
			<div className="container">
				<div>
					<Weather />
					<WeatherItemShelf>
						{forecastData.map((data, index) => (
							<WeatherItem data={data} key={index} />
						))}
					</WeatherItemShelf>
				</div>
				<div>
					<WeatherMap
						latitude={cityLatLon.latitude}
						longitude={cityLatLon.longitude}
					/>
				</div>
			</div>
		</main>
	);
}

export default App;
