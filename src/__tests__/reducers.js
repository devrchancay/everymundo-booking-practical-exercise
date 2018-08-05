import booking from "../reducers/booking";
import { defaultState } from "../store";

import locations from "../data/locations";
import passengers from "../data/typePassenger";
import * as actionsCreators from "../actions/actionsCreators";

const bookingAction = actionsCreators.booking;

describe("booking reducer", () => {
  it("returns the initial state", () => {
    expect(booking(defaultState.booking, {})).toEqual(defaultState.booking);
  });
});

describe("Test ALL Reducers", () => {
  it("should handle SET_LOCATION_INPUT", () => {
    const action = {
      input: "from",
      value: {
        name: "JFK",
        description: "New York"
      }
    };

    expect(
      booking(
        defaultState.booking,
        bookingAction.setLocationInput(action.input, action.value)
      )
    ).toEqual({
      ...defaultState.booking,
      locations: {
        ...defaultState.booking.locations,
        [action.input]: action.value
      }
    });
  });

  it("should handle RECEIVE_LOCATIONS", () => {
    const action = { locations };
    expect(
      booking(
        defaultState.booking,
        bookingAction.receiveLocations(action.locations)
      )
    ).toEqual({
      ...defaultState.booking,
      locations: { ...defaultState.booking.locations, data: action.locations }
    });
  });

  it("should handle SET_DEFAULT_DATES", () => {
    const action = { outBoundFlight: 1, returnFlight: 2 };

    expect(
      booking(
        defaultState.booking,
        bookingAction.setDefaultDates(
          action.outBoundFlight,
          action.returnFlight
        )
      )
    ).toEqual({
      ...defaultState.booking,
      dates: {
        ...defaultState.booking.dates,
        outBoundFlight: action.outBoundFlight,
        returnFlight: action.returnFlight
      }
    });
  });

  it("should handle SET_FOCUSED_INPUT", () => {
    const action = { focusedInput: null };
    expect(
      booking(
        defaultState.booking,
        bookingAction.setFocusedInput(action.focusedInput)
      )
    ).toEqual({
      ...defaultState.booking,
      dates: {
        ...defaultState.booking.dates,
        focusedInput: action.focusedInput
      }
    });
  });

  it("should handle RECEIVE_PASSENGERS", () => {
    const action = { passengers };
    expect(
      booking(
        defaultState.booking,
        bookingAction.receivedPassenger(action.passengers)
      )
    ).toEqual({
      ...defaultState.booking,
      passengers: {
        ...defaultState.booking.passengers,
        data: action.passengers
      }
    });
  });

  it("should handle SET_PASSENGER_VALUE", () => {
    const action = { passenger: passengers[0] };
    expect(
      booking(
        defaultState.booking,
        bookingAction.setPassengerTypeValue(action.passenger)
      )
    ).toEqual({
      ...defaultState.booking,
      passengers: { ...defaultState.booking.passengers, ...action.passenger }
    });
  });

  it("should handle INCREMENT_PASSENGER", () => {
    const action = { key: "adult" };
    expect(
      booking(
        defaultState.booking,
        bookingAction.incrementPassenger(action.key)
      )
    ).toEqual({
      ...defaultState.booking,
      passengers: {
        ...defaultState.booking.passengers,
        [action.key]: defaultState.booking.passengers[action.key] + 1
      }
    });
  });

  it("should handle DECREMENT_PASSENGER", () => {
    const action = { key: "adult" };
    expect(
      booking(
        defaultState.booking,
        bookingAction.decrementPassenger(action.key)
      )
    ).toEqual({
      ...defaultState.booking,
      passengers: {
        ...defaultState.booking.passengers,
        [action.key]: defaultState.booking.passengers[action.key] - 1
      }
    });
  });

  it("should handle TOGGLE_INPUT", () => {
    expect(booking(defaultState.booking, bookingAction.toggleInput())).toEqual({
      ...defaultState.booking,
      passengers: {
        ...defaultState.booking.passengers,
        isOpen: !defaultState.booking.passengers.isOpen
      }
    });
  });

  it("should handle LOADING", () => {
    const action = { status: true };
    expect(
      booking(defaultState.booking, bookingAction.loading(action.status))
    ).toEqual({
      ...defaultState.booking,
      loading: action.status
    });
  });
});
