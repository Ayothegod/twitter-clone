const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const follow = async(req, res) => {
    try {
        res.status(200).json({
            success: true,
            msg: "",
          })
    } catch (error) {
        console.log(error);
        res.status(500);
        throw new Error("Something went wrong");
    }
}

const bookmark = async(req, res) => {
    try {
        res.status(200).json({
            success: true,
            msg: "",
          })
    } catch (error) {
        console.log(error);
        res.status(500);
        throw new Error("Something went wrong");
    }
}

module.exports = {follow, bookmark}