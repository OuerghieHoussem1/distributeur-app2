import express from "express"
import { deleteCard, editDrink, getDrinks, oneDrink, newDrink } from "../controllers/drink.js"

const route = express.Router()

route.get("/",getDrinks)
route.post("/",newDrink)
route.put("/",editDrink)
route.put("/drink",oneDrink)
route.delete("/:cardId",deleteCard)

export default route