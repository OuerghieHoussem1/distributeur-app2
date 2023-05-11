import express from "express"
import { deleteCard, editCard, getCards, oneDrink, saveNewCard, checkCard } from "../controllers/cards.js"

const route = express.Router()



route.get("/:userId",getCards)
route.post("/:userId",saveNewCard)
route.post("/:cardId",checkCard)
route.put("/",editCard)
route.put("/drink",oneDrink)
route.delete("/:cardId",deleteCard)

export default route