import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import throttle from "lodash.throttle";

import rootReducer from "./store";
import { loadState, saveState } from "./store/localStorage";

import "./index.css";
import App from "./App";

// function getStoredState() {
//   const persistedTodosString = localStorage.getItem("todos") || "[]";
//   return {
//     todos: JSON.parse(persistedTodosString),
//   };
// }

const store = createStore(rootReducer, loadState());
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }),
  200
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
