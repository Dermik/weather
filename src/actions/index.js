import axios from 'axios';
// const API_KEY = '94848b4e9e46f4ad5a960b9df7ddd3b6';
const API_KEY = '6706a5a296cb47c6986132401171506';

// const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}`;

export const FETCH_WEATHER= 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	console.log('Request', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
