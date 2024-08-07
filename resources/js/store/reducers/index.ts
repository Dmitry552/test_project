import {combineReducers} from "redux";
import serviceReducer from './serviceReducer';

const rootReducer = combineReducers({
  services: serviceReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
