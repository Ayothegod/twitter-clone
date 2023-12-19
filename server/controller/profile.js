const User = require("../models/User");
const { hashPassword, matchPassword } = require("../util/hashPassword");
const bcrypt = require("bcrypt");

const getUserProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const userProfile = await User.findOne({ username: username });
    if (!userProfile) {
        return res.status(401).json("user profile not found")
    }
    res.json({ user: userProfile });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const userProfile = await User.findOne({ username: username });
    if (!userProfile) {
        return res.status(401).json("user profile not found")
    }

    if(req.body.password){
        const hashedPassword = await hashPassword(req.body.password)
        req.body.password = hashedPassword
    }

    if(req.body.username){
        const checkIfUsernameExist = await User.findOne({username: req.body.username})
        if(checkIfUsernameExist) {
            return res.status(401).json("this username already exist, try another one!")
        }
    }

    const updatedUser = await User.findOneAndUpdate({
        username: username
    }, {
        fullname: req.body.fullname || userProfile.fullname,
        username: req.body.username || userProfile.username,
        password: req.body.password || userProfile.password,
        email: req.body.email || userProfile.email,
        coverPhoto: req.body.coverPhoto || userProfile.coverPhoto,
        profilePhoto: req.body.profilePhoto || userProfile.profilePhoto,
        bio: req.body.bio || userProfile.bio,
        website: req.body.website || userProfile.website,
        profession: req.body.profession || userProfile.profession,
        location: req.body.location || userProfile.location,
    })

    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const deleteUserProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

module.exports = { getUserProfile, updateUserProfile, deleteUserProfile };
