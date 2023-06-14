import React from "react";
import styles from "./Weather.module.css";
import { weatherContext } from "../../WeatherProvider";
import { getBackground } from "../../utils";

function Weather() {
	const { data } = React.useContext(weatherContext);
	const background = getBackground(data.background);

	return (
		<div
			className={styles.wrapper}
			style={{ background: background.background }}
		>
			<div className={styles.flex}>
				<div>
					<div className={styles.name}>{data.name}</div>
					<div className={styles.temp}>{`${data.temp}º`}</div>
				</div>
				<div>
					<img
						className={styles.icon}
						src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
						alt="weather icon"
					/>
					<div className={styles.desc}>{data.description}</div>
					<div className={styles.flex}>
						<div style={{ paddingRight: 10 }}>{`H: ${data.max_temp}º`}</div>
						<div>{`L: ${data.min_temp}º`}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Weather;
