import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers/appReducer";

import { calendarReducer } from './reducers/calendarReducer';  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = combineReducers({
    app: appReducer,
    calendar : calendarReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))