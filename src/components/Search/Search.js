import React from "react";
import styles from "./Search.module.css";
import { weatherContext } from "../../WeatherProvider";

function Search() {
	const { handleSubmit, city, setCity } = React.useContext(weatherContext);
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit}>
				<label htmlFor="city-name" className={styles.label}>
					Enter City Name:
				</label>
				<input
					className={styles.input}
					id="city-name"
					type="text"
					placeholder="London"
					value={city}
					onChange={(event) => setCity(event.target.value)}
				/>
				<button className={styles.btn} type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Search;
