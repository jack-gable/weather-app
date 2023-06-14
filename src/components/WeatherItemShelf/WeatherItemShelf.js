import React from "react";
import styles from "./WeatherItemShelf.module.css";

function WeatherItemShelf({ children }) {
	return <div className={styles.wrapper}>{children}</div>;
}

export default WeatherItemShelf;
