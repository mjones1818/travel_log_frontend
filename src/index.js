import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import manageUsers from './reducers/manageUsers'
import manageTrips from './reducers/manageTrips';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

const rootReducer = combineReducers({
  users: manageUsers,
  trips: manageTrips
})

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(

      <Provider store={store}>
        <App />
      </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// this is a test of the add trip branch