import React from "react";
import styles from "./WeatherItem.module.css";
import { getDayOfWeek, getBackground } from "../../utils/index";

function WeatherItem({ data }) {
	const day = getDayOfWeek(data.date);
	const background = getBackground(data.background);
	return (
		<div
			className={styles.wrapper}
			style={{ background: background.background, color: background.color }}
		>
			<div>
				<div className={styles.flex}>
					<div className={styles.day}>{day}</div>
					<img
						className={styles.icon}
						src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
						alt="weather icon"
					/>
				</div>
				<div className={styles.desc}>{data.description}</div>
				<div className={styles.flex}>
					<div style={{ paddingRight: 10 }}>{`L: ${data.min_temp}º`}</div>
					<div style={{ fontWeight: "bold" }}>{`H: ${data.max_temp}º`}</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherItem;
