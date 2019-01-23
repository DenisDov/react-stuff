import { all, fork } from 'redux-saga/effects';

import { homeWatcher } from './Homepage/HomepageActions';

export default function* rootSaga() {
  yield all([fork(homeWatcher)]);
}
