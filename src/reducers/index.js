import { combineReducers } from "redux";
import authReducer from "./auth"
import devicesReducer from "./devices"
import errorReducer from "./error";
import newCardDataReducer from "./newCardData";
import cardsReducer from "./cards";
import adminCardDataReducer from "./adminReadData";
import currentCard from "./currentCard";
const reducers = combineReducers({
    authReducer,
    devicesReducer,
    errorReducer,
    newCardDataReducer,
    cardsReducer,
    adminCardDataReducer,
    currentCard
})


export default reducers