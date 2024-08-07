import {put, call} from 'redux-saga/effects';
import {serviceTypes as types} from '../actions/types';
import * as serviceActions from '../actions/serviceActions';

export function* getServices() {
  try {
    const data = yield call(serviceActions.getServices);
    yield put({type: types.GET_SERVICE_SUCCESS, payload: data});
  } catch (error) {
    console.log('Error', error)
  }
}

export function* deleteServices(action) {
  try {
    yield put({type: types.DELETE_SERVICE_SUCCESS, payload: action.payload});
  } catch (error) {
    console.log('Error', error)
  }
}

export function* addServices(action) {
  try {
    const data = yield call(serviceActions.addService, action.payload);
    yield put({type: types.ADD_SERVICE_SUCCESS, payload: data});
  } catch (error) {
    console.log('Error', error)
  }
}

