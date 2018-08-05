import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const defaultState = {
  booking: {
    locations: {
      data: [],
      from: null,
      to: null
    },
    dates: {
      outBoundFlight: null,
      returnFlight: null,
      focusedInput: null
    },
    passengers: {
      isOpen: false,
      data: [],
      total: 1,
      adult: 1,
      child: 0,
      infant: 0
    },
    loading: false
  }
};

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const configureStore = () => {
  const store = createStore(rootReducer, defaultState, enhancers);

  if (module.hot) {
    module.hot.accept("./reducers/", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
