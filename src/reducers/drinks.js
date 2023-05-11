const drinksReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_DRINKS":
            return action.payload
        case "ADD_DRINK":
            return [...state,action.payload]
        case "UPDATE_DRINK":
            state = state.map((device,index)=>device._id===action.payload._id?action.payload:device)
            return [...state]
        case "DELETE_DRINK":
            state = state.filter((device,index)=>device._id!==action.payload._id)
            return [...state]
        default:
            return state
    }
}

export default drinksReducer