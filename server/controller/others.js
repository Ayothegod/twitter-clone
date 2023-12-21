const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const follower = async (req, res) => {
  try {
    const { username } = req.params;
    const { followerUsername } = req.body;
    if (!username || !followerUsername) {
      return res
        .status(401)
        .json("you must provide username and followerUsername");
    }
    if (username === followerUsername) {
      return res.status(400).json(null);
    }

    // find my account
    const myAccount = await User.findOne({ username });

    // check if followerUsername is included in followers array, if yes unfollow
    if (myAccount.followers.includes(followerUsername)) {
      myAccount.followers.pull(followerUsername);
      await myAccount.save();
      return res.status(401).json(`${followerUsername} has unfollowed you`);
    }

    // follow me
    myAccount.followers.push(followerUsername);
    await myAccount.save();

    res.status(200).json({
      success: true,
      msg: `${followerUsername} has followed you`,
      myAccount,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const following = async (req, res) => {
  try {
    const { username } = req.params;
    const { followerUsername } = req.body;
    if (!username || !followerUsername) {
      return res
        .status(401)
        .json("you must provide username and followerUsername");
    }
    if (username === followerUsername) {
      return res.status(400).json(null);
    }

    // find my account
    const myAccount = await User.findOne({ username });

    // check if followerUsername is included in followers array, if yes unfollow
    if (myAccount.followers.includes(followerUsername)) {
      myAccount.followers.pull(followerUsername);
      await post.save();
      return res.status(401).json(`${followerUsername} has unfollowed you`);
    }

    // follow me
    myAccount.followers.push(followerUsername);
    await myAccount.save();

    res.status(200).json({
      success: true,
      msg: `${followerUsername} has followed you`,
      myAccount,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const bookmark = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      msg: "",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error("Something went wrong");
  }
};

module.exports = { follower, following, bookmark };

// {
//     "success": true,
//     "msg": "user created successfully",
//     "user": {
//       "fullname": "Toheeb",
//       "email": "",
//       "username": "Toheeb",
//       "password": "$2b$10$Qdo..FY2g75xhtVhnFerN.yLgtad0k99JeHkcXaIGyDrEpA0p54eK",
//       "followers": [],
//       "following": [],
//       "profilePhoto": "",
//       "coverPhoto": "",
//       "location": "",
//       "profession": "",
//       "bio": "",
//       "website": "",
//       "postsId": [],
//       "_id": "658477bb87a9582f09e0cf68",
//       "createdAt": "2023-12-21T17:37:00.025Z",
//       "updatedAt": "2023-12-21T17:37:00.025Z",
//       "__v": 0
//     }
//   }

// {
//     "success": true,
//     "msg": "user created successfully",
//     "user": {
//       "fullname": "Aiiomide",
//       "email": "",
//       "username": "Aiiomide",
//       "password": "$2b$10$b13sTsp1fyK5gU7CtKDhYe3YjBhM/vSV9TptAriPIdO5sVj97Z.yi",
//       "followers": [],
//       "following": [],
//       "profilePhoto": "",
//       "coverPhoto": "",
//       "location": "",
//       "profession": "",
//       "bio": "",
//       "website": "",
//       "postsId": [],
//       "_id": "658477e4f8c0780939d4cf03",
//       "createdAt": "2023-12-21T17:37:40.926Z",
//       "updatedAt": "2023-12-21T17:37:40.926Z",
//       "__v": 0
//     }
//   }
