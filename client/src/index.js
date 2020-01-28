import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/Store";
import { startGetPets } from "./action/Pets";

const store = configureStore();

console.log(store.getState());

store.dispatch(startGetPets());
store.subscribe(() => console.log(store.getState()));

const redElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(redElement, document.getElementById("root"));
