import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCityDetails } from './state/actions';


class City extends Component {
  shouldComponentUpdate () {
    if (this.props.match.params.cityName === this.props.currentCity.name) {
      console.log(this.props.match.params.cityName, this.props.currentCity.name)
      return false}
      else {
      this.props.getCityDetails(this.props.match.params.cityName);
      return true;
  }
}

  render() {

    return (

      <div>
        <h1>City Forecast for: {this.props.currentCity.name}</h1>
        <div>
          <ul>
            <p>Humidity: {this.props.currentCity.humidity}</p>
            <p>Temperature: {this.props.currentCity.temp}</p>
            <p>Temperature Max: {this.props.currentCity.tempmax}</p>
            <p>Temperature Min: {this.props.currentCity.tempmin}</p>
            {this.props.currentCity.status.map((weather, idx) => {
              if (idx === 0) {
                return (<p key={idx}>Primary Condition: {weather.description}</p>)
              } else {
                return (<p key={idx}>Additonal Conditions: {weather.description}</p>)
              }
            })
            }
          </ul>

        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCityDetails: (cityName) => dispatch(getCityDetails(cityName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);