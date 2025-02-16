import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer.reducer";

import alertReducer from "./reducers/alertReducer.reducer";
const rootReducer = combineReducers({
    auth: authReducer,
    alert:  alertReducer
});


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;