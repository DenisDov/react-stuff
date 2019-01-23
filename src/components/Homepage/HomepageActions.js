import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchData } from '../../config/api';

export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({
  type: RECEIVE_API_DATA,
  payload: data,
});

function* getApiData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* homeWatcher() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
