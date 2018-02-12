import axios from 'axios';
import { UPD_CUR_CITY } from './types';

class curCity {
  constructor(
    name,
    humidity,
    temp,
    tempmax,
    tempmin,
    status
  ) {
    this.name = name;
    this.humidity = humidity;
    this.temp = temp;
    this.tempmax = tempmax;
    this.tempmin = tempmin;
    this.status = status;
  }
}

export const getCityDetails = (cityName) => {

  return (dispatch, getState, url) => {
    const cityUrl = `${url}${cityName}&units=imperial&appid=57ccbda13c3416c029caabee6b8abd26`
    axios.get(cityUrl)
      .then((response) => {
        console.log(response.data);
        const newCity = new curCity(response.data.name, response.data.main.humidity, response.data.main.temp, response.data.main.temp_max, response.data.main.temp_min, response.data.weather)
        dispatch(updateCurrentCity(newCity))
      })
  }
}
const updateCurrentCity = payload => {
  return {
    type: UPD_CUR_CITY,
    payload
  }
}