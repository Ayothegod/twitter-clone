const Post = require("../models/Post");
const User = require("../models/User");

const createPost = (req, res) => {
    try {
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