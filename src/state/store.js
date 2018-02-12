import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers.js';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument('http://api.openweathermap.org/data/2.5/weather?q='))
    )
  )

  export default store;
