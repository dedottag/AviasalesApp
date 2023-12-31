import { createStore, combineReducers, applyMiddleware } from "redux";
import { ticketReducer } from "./ticketReducer";
import { ticketsCloneReduser } from "./tikcketsCloneReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  tickets: ticketReducer,
  ticketsClone: ticketsCloneReduser,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
