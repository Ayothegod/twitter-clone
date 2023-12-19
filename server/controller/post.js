const Post = require("../models/Post");
const User = require("../models/User");
const { validationResult } = require("express-validator");

const createPost = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (errors.isEmpty() === false) {
          return res.status(422).json({ errors: errors.array() });
        }

        const post = await Post.create({
            authorId: req.body.authorId,
            authorPhoto:req.body.authorPhoto,
            authorUsername: req.body.authorUsername,
            authorFullname: req.body.authorFullname,
            postData:req.body.postData,
        })

        // const addPostToUserData

        res.status(201).json("Alright")
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
}

const getSinglePost = (req, res) => {
    try {
        res.status(201).json("Alright")
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
}

const deletePost = (req, res) => {
    try {
        res.status(201).json("Alright")
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
}

const getAllPostsFromUser = (req, res) => {
    try {
        res.status(201).json("Alright")
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
}

const getAllPosts = (req, res) => {
    try {
        res.status(201).json("Alright")
    } catch (error) {
        res.status(500);
        throw new Error("Something went wrong");
    }
}

module.exports = {createPost, getSinglePost, deletePost, getAllPostsFromUser, getAllPosts}