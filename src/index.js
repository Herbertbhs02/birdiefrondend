import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './store/sagas/saga';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watcherSaga);



ReactDOM.render(
  
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);



