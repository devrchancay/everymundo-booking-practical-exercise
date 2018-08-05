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
} from "./actions";

import locations from "../../data/locations";
import passenger from "../../data/typePassenger";
import moment from "moment";

export const setLocationInput = (input, value) => ({
  type: SET_LOCATION_INPUT,
  input,
  value
});

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const setDefaultDates = (outBoundFlight, returnFlight) => ({
  type: SET_DEFAULT_DATES,
  outBoundFlight,
  returnFlight
});

export const setFocusedInput = focusedInput => ({
  type: SET_FOCUSED_INPUT,
  focusedInput
});

export const receivedPassenger = passengers => ({
  type: RECEIVE_PASSENGERS,
  passengers
});

export const setPassengerTypeValue = passenger => ({
  type: SET_PASSENGER_VALUE,
  passenger
});

export const loading = status => ({
  type: LOADING,
  status
});

export const fetchLocations = () => dispatch => {
  dispatch(receiveLocations(locations));
  dispatch(setLocationInput("from", locations[0]));
};

export const setDates = () => dispatch => {
  const outBoundFlight = moment().add(1, "day");
  const returnFlight = moment().add(8, "days");
  dispatch(setDefaultDates(outBoundFlight, returnFlight));
};

export const incrementPassenger = key => ({
  type: INCREMENT_PASSENGER,
  key
});

export const decrementPassenger = key => ({
  type: DECREMENT_PASSENGER,
  key
});

export const toggleInput = () => ({
  type: TOGGLE_INPUT
});

export const fetchTypePassenger = () => dispatch => {
  dispatch(receivedPassenger(passenger));

  passenger
    .map(item => ({ [item.key]: item.value }))
    .map(item => dispatch(setPassengerTypeValue(item)));
};

export const buildUrl = ({
  from,
  to,
  adult,
  infant,
  child,
  outBoundFlight,
  returnFlight
}) => dispatch => {
  dispatch(loading(true));

  const format = date => moment(date).format("YYYY-MM-DD");

  let url = `https://www.swiss.com/us/en/Book/`;
  url += `Outbound/${from["name"]}-${to["name"]}`;
  if (!returnFlight) {
    url += `/from-${format(outBoundFlight)}/`;
  } else {
    const from = format(outBoundFlight);
    const to = format(returnFlight);
    url += `/from-${from}/to-${to}/`;
  }

  url += `adults-${adult}/children-${child}/infants-${infant}/`;
  url += `class-economy/al-LX/sidmbvl`;

  setTimeout(() => {
    dispatch(loading(false));
    window.location.href = url;
  }, 2000);
};

export const calculateTotal = () => (dispatch, getState) => {
  const { passengers } = getState().booking;
  const { adult, child, infant } = passengers;
  const total = Object.values({ adult, child, infant }).reduce((prev, next) => {
    prev = prev + next;
    return prev;
  }, 0);

  dispatch(setPassengerTypeValue({ total }));
};
