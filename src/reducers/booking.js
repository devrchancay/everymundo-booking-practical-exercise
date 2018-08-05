import {
  SET_LOCATION_INPUT,
  RECEIVE_LOCATIONS,
  SET_DEFAULT_DATES,
  SET_FOCUSED_INPUT,
  RECEIVE_PASSENGERS,
  SET_PASSENGER_VALUE,
  INCREMENT_PASSENGER,
  DECREMENT_PASSENGER,
  TOGGLE_INPUT,
  LOADING
} from "../actions/booking/actions";

const booking = (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION_INPUT:
      return {
        ...state,
        locations: { ...state.locations, [action.input]: action.value }
      };
    case RECEIVE_LOCATIONS:
      return {
        ...state,
        locations: { ...state.locations, data: action.locations }
      };
    case SET_DEFAULT_DATES:
      return {
        ...state,
        dates: {
          ...state.dates,
          outBoundFlight: action.outBoundFlight,
          returnFlight: action.returnFlight
        }
      };
    case SET_FOCUSED_INPUT:
      return {
        ...state,
        dates: { ...state.dates, focusedInput: action.focusedInput }
      };
    case RECEIVE_PASSENGERS:
      return {
        ...state,
        passengers: { ...state.passengers, data: action.passengers }
      };
    case SET_PASSENGER_VALUE:
      return {
        ...state,
        passengers: { ...state.passengers, ...action.passenger }
      };
    case INCREMENT_PASSENGER:
      return {
        ...state,
        passengers: {
          ...state.passengers,
          [action.key]: state.passengers[action.key] + 1
        }
      };
    case DECREMENT_PASSENGER:
      return {
        ...state,
        passengers: {
          ...state.passengers,
          [action.key]: state.passengers[action.key] - 1
        }
      };
    case TOGGLE_INPUT:
      return {
        ...state,
        passengers: {
          ...state.passengers,
          isOpen: !state.passengers.isOpen
        }
      };
    case LOADING:
      return {
        ...state,
        loading: action.status
      };
    default:
      return state;
  }
};

export default booking;
