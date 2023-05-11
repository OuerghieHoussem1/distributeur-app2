import { combineReducers } from "redux";
import authReducer from "./auth"
import devicesReducer from "./devices"
import errorReducer from "./error";
import newCardDataReducer from "./newCardData";
import cardsReducer from "./cards";
import adminCardDataReducer from "./adminReadData";
import currentCard from "./currentCard";
import drinksReducer from "./drinks";
import currentDrink from "./currentDrink";
const reducers = combineReducers({
    authReducer,
    devicesReducer,
    errorReducer,
    newCardDataReducer,
    cardsReducer,
    adminCardDataReducer,
    currentCard,
    drinksReducer,
    currentDrink
})


export default reducers