

import express from "express"
import { lookupLocation } from "../controllers/geocodingController.js"

const router = express.Router()

router.get("/lookup", lookupLocation)

export default router