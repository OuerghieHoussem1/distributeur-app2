import { deleteDrink, editDrink, getDrinks, oneDrinkDrink, createDrink, emptyDrink } from "../api"


export const setNewCardData = (uuid,deviceId) => async (dispatch) => {
    try {
        dispatch({type:"CARD_INSERTED",payload:{uuid,deviceId}})
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:error.response.data})
    }
}


export const setNewAdminCardData = (deviceId,readData,uuid,cardType) => async (dispatch) => {
    try {
        dispatch({type:"ADMIN_INSERTED",payload:{deviceId,readData,uuid,cardType}})
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:error.response.data})
    }
}


export const loadDrinks = () => async (dispatch) => {
    try {
        const {data} = await getDrinks()
        dispatch({type:"LOAD_DRINKS",payload:data})
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:error.response.data})
    }
}


export const addNewCard = (userId, newCardData) => async (dispatch) => {
    try {
       const {data} = await createDrink(userId,newCardData)
       dispatch({type:"ADD_CARD",payload:data}) 
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:error.response.data})
    }
}


export const editDrinkController = (newDrink) => async (dispatch) => {
    try {
        const {data} = await editDrink(newDrink)
        dispatch({type:"UPDATE_DRINK",payload:data})
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:error.response.data})
    }
}


export const deleteCards = (cardId) => async (dispatch) => {
    try {
        const {data} = await deleteDrink(cardId)
        dispatch({type:"DELETE_CARD",payload:data})
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:error.response.data})
    }
}


export const drinkChosen = (drink) => async (dispatch) => {
    try {
        dispatch({type:"DRINK_CHOSEN",payload:drink})
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:"CARD_ACCEPTED error"})
    }
}

export const lessDrinks = (drink) => async (dispatch) => {
    try {
        const {data} = await oneDrinkDrink(drink)
        dispatch({type:"DRINK_DRANK"})
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:"CARD_ACCEPTED error"})
    }
}

export const emptyDrinkController = (drink) => async (dispatch) => {
    try {
        const {data} = await emptyDrink(drink)
        dispatch({type:"UPDATE_DRINK",payload:data})
    } catch (error) {
        dispatch({type:"SHOW_ERROR",payload:"CARD_ACCEPTED error"})
    }
}

