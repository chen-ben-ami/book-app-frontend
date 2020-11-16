import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from "./State/Reducer/index";
import rootSaga from "./State/Saga/index";
import App from './Containers/App';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(),
  compose(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

