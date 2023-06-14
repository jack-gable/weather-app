import React from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import WeatherItem from "./components/WeatherItem";
import WeatherItemShelf from "./components/WeatherItemShelf";
import Search from "./components/Search";
import { weatherContext } from "./WeatherProvider";

function App() {
	const { forecastData } = React.useContext(weatherContext);
	return (
		<main>
			<Header />
			<Search />
			<Weather />
			<WeatherItemShelf>
				{forecastData.map((data, index) => (
					<WeatherItem data={data} key={index} />
				))}
			</WeatherItemShelf>
		</main>
	);
}

export default App;
