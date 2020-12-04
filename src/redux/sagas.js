import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import { fetchSuggestions } from '../api/wikipedia';
import { onFailure, onSuccess } from './actions';
import { BEGIN_SEARCH } from './actionTypes';
import { getQuery } from './selectors';

function* doSearchSaga() {
  const query = yield select(getQuery);
  try {
    const response = yield call(fetchSuggestions, query);
    yield put(onSuccess(response[1]));
  } catch (error) {
    yield put(onFailure());
  }
}

function* rootSaga() {
  yield takeLatest(BEGIN_SEARCH, doSearchSaga);
}

export default rootSaga;
