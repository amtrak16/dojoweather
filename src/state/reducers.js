import { UPD_CUR_CITY } from './types';

const initialState = {
  cities: [
    "Seattle",
    "San Jose",
    "Burbank",
    "Dallas",
    "Chicago",
    "Frankfurt",
    "Miami",
    "Punta Cana"
  ],
  currentCity: {
  name:'',
  humidity:'',
  temp: '',
  tempmax: '',
  tempmin: '',
  status:[]}
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPD_CUR_CITY:
      console.log(action.payload)
      return { ...state, currentCity: action.payload };
    default:
      return state
  }
}


export default reducer;