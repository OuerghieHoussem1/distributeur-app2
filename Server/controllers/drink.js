import cardModel from "../models/card.js"
import drinkModel from "../models/drink.js"

export const getDrinks = async (req, res) => {
    const drinks = await drinkModel.find()


    res.status(200).json(drinks)
}

export const newDrink = async (req,res) => {

    const newDrink = await drinkModel.create({...req.body})
    
    return res.status(200).json(newDrink)
}

export const editDrink = async (req,res) => {
    const drink = await drinkModel.find({drinkId:req.body._id})
    if(!drink) return res.status(403).json({message:"drink not found",buttonText:"Retry"})

    const newDrink = await drinkModel.findByIdAndUpdate(req.body._id,{...req.body},{new:true})

    return res.status(200).json(newDrink)
}

export const oneDrink = async (req,res) => {
    const drink = await drinkModel.find({drinkId:req.body._id})
    if(!drink) return res.status(403).json({message:"drink not found",buttonText:"Retry"})


    const newdrink = await drinkModel.findByIdAndUpdate(req.body._id,{...req.body,drinkQuantity:req.body.drinkQuantity-1},{new:true})

    return res.status(200).json(newdrink)
}

export const emptyDrink = async (req, res) => {
    const drink = await drinkModel.find({drinkId:req.body._id})
    if(!drink) return res.status(403).json({message:"drink not found",buttonText:"Retry"})


    const newdrink = await drinkModel.findByIdAndUpdate(req.body._id,{...req.body,drinkQuantity:0},{new:true})

    return res.status(200).json(newdrink)
}


export const deleteCard = async (req,res) => {
    const card = await cardModel.find({cardId:req.params.cardId})
    if(!card) return res.status(403).json({message:"Card not found",buttonText:"Retry"})
    
    const deleted = await cardModel.findByIdAndDelete(req.params.cardId)
    
    return res.status(200).json(deleted)
}