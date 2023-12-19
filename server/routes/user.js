const express = require("express")
const { registerValidator } = require("../util/userValidator")
const { validationResult } = require("express-validator")
const router = express.Router()


const createUser = (req, res) => {
    try {
        const errors = validationResult(req)
        if (errors.isEmpty() === false) {
            return res.status(422).json({errors: errors.array()})
          }


        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json(error)
    }
}

router.post("/user",registerValidator, createUser)

module.exports = router