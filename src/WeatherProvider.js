import React from "react";

const weatherContext = React.createContext();
const API_KEY = "f3f5e64339fc1730dd57897238232e29";

function WeatherProvider({ children }) {
	const [weatherData, setWeatherData] = React.useState([]);
	const [weatherForecast, setWeatherForecast] = React.useState([]);
	const [city, setCity] = React.useState("");
	const [cityLatLon, setCityLatLon] = React.useState([]);
	const END_POINT_1 = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${API_KEY}`;
	const END_POINT_2 = `https://api.openweathermap.org/data/2.5/forecast?q=London&units=imperial&appid=${API_KEY}`;

	React.useEffect(() => {
		const getWeather = async () => {
			try {
				const response = await fetch(END_POINT_1);

				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}

				const json = await response.json();
				setWeatherData(json);
			} catch (error) {
				console.error(error);
			}
		};

		getWeather();
	}, [END_POINT_1]);

	React.useEffect(() => {
		const getWeather2 = async () => {
			try {
				const response = await fetch(END_POINT_2);

				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}

				const json = await response.json();
				setWeatherForecast(json);
			} catch (error) {
				console.error(error);
			}
		};

		getWeather2();
	}, [END_POINT_2]);

	const data = {
		name: weatherData.name,
		icon: weatherData.weather?.[0].icon,
		temp: Math.round(Math.floor(weatherData.main?.temp)),
		max_temp: Math.round(Math.floor(weatherData.main?.temp_max)),
		min_temp: Math.round(Math.floor(weatherData.main?.temp_min)),
		description: weatherData.weather?.[0].description,
		background: weatherData.weather?.[0].main,
	};

	const forecastData = [
		{
			date: weatherForecast.list?.[0].dt_txt,
			max_temp: Math.round(Math.floor(weatherForecast.list?.[0].main.temp_max)),
			min_temp: Math.round(Math.floor(weatherForecast.list?.[0].main.temp_min)),
			icon: weatherForecast.list?.[0].weather?.[0].icon,
			description: weatherForecast.list?.[0].weather?.[0].description,
			background: weatherForecast.list?.[0].weather?.[0].main,
		},
		{
			date: weatherForecast.list?.[8].dt_txt,
			max_temp: Math.round(Math.floor(weatherForecast.list?.[8].main.temp_max)),
			min_temp: Math.round(Math.floor(weatherForecast.list?.[8].main.temp_min)),
			icon: weatherForecast.list?.[8].weather?.[0].icon,
			description: weatherForecast.list?.[8].weather?.[0].description,
			background: weatherForecast.list?.[8].weather?.[0].main,
		},
		{
			date: weatherForecast.list?.[16].dt_txt,
			max_temp: Math.round(
				Math.floor(weatherForecast.list?.[16].main.temp_max)
			),
			min_temp: Math.round(
				Math.floor(weatherForecast.list?.[16].main.temp_min)
			),
			icon: weatherForecast.list?.[16].weather?.[0].icon,
			description: weatherForecast.list?.[16].weather?.[0].description,
			background: weatherForecast.list?.[16].weather?.[0].main,
		},
		{
			date: weatherForecast.list?.[24].dt_txt,
			max_temp: Math.round(
				Math.floor(weatherForecast.list?.[24].main.temp_max)
			),
			min_temp: Math.round(
				Math.floor(weatherForecast.list?.[24].main.temp_min)
			),
			icon: weatherForecast.list?.[24].weather?.[0].icon,
			description: weatherForecast.list?.[24].weather?.[0].description,
			background: weatherForecast.list?.[24].weather?.[0].main,
		},
		{
			date: weatherForecast.list?.[32].dt_txt,
			max_temp: Math.round(
				Math.floor(weatherForecast.list?.[32].main.temp_max)
			),
			min_temp: Math.round(
				Math.floor(weatherForecast.list?.[32].main.temp_min)
			),
			icon: weatherForecast.list?.[32].weather?.[0].icon,
			description: weatherForecast.list?.[32].weather?.[0].description,
			background: weatherForecast.list?.[32].weather?.[0].main,
		},
	];

	function handleSubmit(event) {
		event.preventDefault();

		const getWeather = async () => {
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
				);

				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}

				const json = await response.json();
				setWeatherData(json);
			} catch (error) {
				console.error(error);
			}
		};

		const getWeather2 = async () => {
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`
				);

				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}

				const json = await response.json();
				setWeatherForecast(json);
			} catch (error) {
				console.error(error);
			}
		};

		const getLatLon = async () => {
			try {
				const response = await fetch(
					`https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
						city
					)}&format=json`
				);

				if (!response.ok) {
					throw new Error("fetch failed");
				}

				const data = await response.json();

				if (data.length === 0) {
					throw new Error("No results found for the given city");
				}

				const { lat, lon } = data[0];
				setCityLatLon({
					latitude: parseFloat(lat),
					longitude: parseFloat(lon),
				});
			} catch (error) {
				console.log(error);
			}
		};

		getLatLon();

		getWeather();
		getWeather2();

		setCity("");
	}
	console.log(cityLatLon);
	return (
		<weatherContext.Provider
			value={{
				data,
				forecastData,
				weatherData,
				weatherForecast,
				city,
				setCity,
				handleSubmit,
				cityLatLon,
			}}
		>
			{children}
		</weatherContext.Provider>
	);
}

export { WeatherProvider, weatherContext };
