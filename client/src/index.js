import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import Chat from "./chatbot/Chat";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Chat />
    </React.StrictMode>
  </Provider>
);
