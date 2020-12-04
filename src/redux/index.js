import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import sagas from './sagas';
import reducer from './reducer';
import epic from './epic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

export default createStore(reducer,
  composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
    // applyMiddleware(epicMiddleware),
  ));
sagaMiddleware.run(sagas);
// epicMiddleware.run(epic);
