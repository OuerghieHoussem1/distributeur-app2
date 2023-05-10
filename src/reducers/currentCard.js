const currentCard = (state=null, action) => {
    switch(action.type){
        case "CARD_ACCEPTED":
            return action.payload
        case "LESS_BEVERAGES":
            return null
        default:
            return state
    }
}

export default currentCard