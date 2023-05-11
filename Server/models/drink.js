import mongoose from "mongoose";

const schema = mongoose.Schema({
    drinkName:{
        type:String,
    },
    drinkQuantity:{
        type:Number,
        default:3200
    },
    saveur:{
        type:Number
    },
    className:{
        type:String
    }
})

const drinkModel = mongoose.model("drink",schema)


export default drinkModel