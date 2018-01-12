import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'
 class WeatherList extends Component{

renderWeather(cityData){
  const name = cityData.city.name;
  const temps= cityData.list.map(weather => weather.main.temp);
  const humidity = cityData.list.map(weather => weather.main.humidity);
  const pressure = cityData.list.map(weather => weather.main.pressure);
  const {lon, lat} = cityData.city.coord;

  return(
    <tr key={name} >
      <td >{name}</td>
      <td><Chart property = {temps} color="red" units="K"/></td>
      <td><Chart property = {humidity} color="orange" units ="hPa" /></td>
      <td><Chart property = {pressure} color="green" units ="%" /></td>
      </tr>
  );
}

render()
{
return (
<table className="table table-hover">
  <thead>
  <tr>
  <th> city</th>
  <th> Temperature (K)</th>
  <th> Pressure (hPa)</th>
  <th> Humidity (%) </th>
  </tr>
  </thead>

  <tbody>
  {this.props.weather.map(this.renderWeather)}
  </tbody>
  </table>

);


}




}

function mapStateToProps({weather}){

  return {weather};// identical to weather : weather
}

export default connect(mapStateToProps)(WeatherList);
