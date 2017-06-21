import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData){
		console.log(cityData);

		const name = cityData.location.name;
		const temps = cityData.forecast.forecastday[0].hour.map(weather => weather.temp_c)
		const img = cityData.forecast.forecastday[0].hour[0].condition.icon
		// const temps = cityData.forecast.forecastday[0].hour.map(weather => weather.temp_c)
		// const pressures =

		console.log(temps)
		return (
			<tr key={name}>
				<td>
					{name}
				</td>
				<td>
					<Chart data={temps} color="orange" />
				</td>
				<td>
					<Chart data={temps} color="green" />
				</td>
				{/* <td>
					<img src={img} />
				</td> */}
			</tr>
		)
	}
	render() {
		return (
			<div>
				{this.props.children}
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
			<tbody>
				{this.props.weather.map(this.renderWeather)}
			</tbody>
			</table>
		</div>
		)
	}
}

function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList)
