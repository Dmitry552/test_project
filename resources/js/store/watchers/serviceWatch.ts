import {takeLatest} from 'redux-saga/effects';
import {serviceTypes as types} from '../actions/types';
import {getServices, deleteServices, addServices} from '../sagas/servicesSaga';

export function* watchService() {
  yield takeLatest(types.GET_SERVICE, getServices)
  yield takeLatest(types.DELETE_SERVICE, deleteServices)
  yield takeLatest(types.ADD_SERVICE, addServices)
}
