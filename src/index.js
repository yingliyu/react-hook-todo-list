import React from "react";
import ReactDOM from "react-dom";
// import TodoList from './TodoList'
import App from "@/pages/app";
import { Provider } from "react-redux";
import store from "./store";

// JSX
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
