import {serviceTypes as types} from './types';
import {TAddServiceData, TService} from "../../types/types";


type TServiceState = {
    services: TService[]
}
const initialState: TServiceState = {
  services: [],
}

const serviceReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_SERVICE_SUCCESS:
      return {
        ...state,
        services: actions.payload,
      }
    case types.ADD_SERVICE_SUCCESS:
      return {
        ...state,
        services: [...state.services, actions.payload],
      }
    case types.DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        services: state.services.filter((service) => {
          return service.id !== actions.payload
        }),
      }

    default:
      return state;
  }
}

export const getServices = () => ({type: types.GET_SERVICE});
export const deleteService = (id: number) => ({type: types.DELETE_SERVICE, payload: id});
export const addService = (data: TAddServiceData) => ({type: types.ADD_SERVICE, payload: data});

export default serviceReducer;
