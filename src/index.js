import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";

import registerServiceWorker from "./registerServiceWorker";
const rootEl = document.getElementById("root");

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    );
  });
}
