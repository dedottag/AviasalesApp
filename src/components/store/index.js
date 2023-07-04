import { createStore, combineReducers, applyMiddleware } from "redux";
import { ticketReducer } from "./ticketReducer";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  tickets: ticketReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
