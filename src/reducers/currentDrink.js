const currentDrink = (state=null, action) => {
    switch(action.type){
        case "DRINK_CHOSEN":
            return action.payload
        case "DRINK_DRANK":
            return null
        default:
            return state
    }
}

export default currentDrink