export function getDayOfWeek(dateString) {
	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const date = new Date(dateString);
	const dayOfWeekIndex = date.getDay();
	return daysOfWeek[dayOfWeekIndex];
}

export function getBackground(background) {
	switch (background) {
		case "Clear":
			return { background: "#93c4ff", color: "#fff" };
		case "Rain":
			return { background: "#0f2a42", color: "#fff" };
		case "Clouds":
			return { background: "#cccccc", color: "#333" };
		case "Snow":
			return { background: "#ececec", color: "#333" };
		case "Thunderstorm":
			return { background: "#666666", color: "#fff" };
		case "Drizzle":
			return { background: "#ececec", color: "#333" };
		default:
			return "#aeb5bf";
	}
}
