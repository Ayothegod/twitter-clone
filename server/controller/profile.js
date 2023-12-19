const User = require("../models/User");
const { hashPassword, matchPassword } = require("../util/hashPassword");
const bcrypt = require("bcrypt");

const getUserProfile = async (req, res) => {
    try {
        res.status(200).json("alright")
        
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
}

const updateUserProfile = async (req, res) => {
    try {
        // res.status(200).json("alright")
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
}

const deleteUserProfile = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
}

module.exports = {getUserProfile, updateUserProfile, deleteUserProfile}