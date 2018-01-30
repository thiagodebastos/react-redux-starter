import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { AppContainer } from "react-hot-loader";
import configureStore, { history } from "./store";
import App from "./containers/app/";

import "sanitize.css/sanitize.css";
import "./index.css";

const target = document.querySelector("#root");
const store = configureStore();

const renderApp = Component =>
  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Component />
          </div>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    target
  );

renderApp(App);

if (module.hot) {
  module.hot.accept("./containers/app", () => {
    renderApp(App);
  });
}
