import express from "express"
import { Index, Store, Update, Delete } from "../controllers/Animals.js"
import { Logger } from "../middleware/Middleware-Logger.js"
import { Post_Checker } from "../middleware/Middleware-Post-Checker.js"


const router = express.Router()

//Animal
router.get('/animals', Logger, Index)
router.post('/animals', Logger, Post_Checker, Store)
router.put('/animals/:id', Logger, Update)
router.delete('/animals/:id', Logger, Delete)

export default router