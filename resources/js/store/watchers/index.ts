import { fork } from 'redux-saga/effects'
import {watchService} from "./serviceWatch";

export default function* rootSaga() {
  yield fork(watchService);
}
