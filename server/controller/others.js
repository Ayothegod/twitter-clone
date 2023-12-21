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
    const { followedUsername } = req.params;
    const { myUsername } = req.body;
    if (!followedUsername || !myUsername) {
      return res
        .status(401)
        .json("you must provide followedUsername and myUsername");
    }
    if (myUsername === followedUsername) {
      return res.status(400).json(null);
    }

    // find my account
    const myAccount = await User.findOne({ username: myUsername });
    // find his/her account
    const followedAccount = await User.findOne({ username: followedUsername });

    // check if my username is on his followers
    if (followedAccount.followers.includes(myUsername) || myAccount.following.includes(followedUsername)) {
      followedAccount.followers.pull(myUsername);
      await followedAccount.save();

      myAccount.following.pull(followedUsername);
      await myAccount.save();
      return res.status(401).json(`you have unfollowed ${followedUsername} and ${followedUsername} is no longer on your followings`);
    }

    // // check his username is on my following
    // if (myAccount.following.includes(followedUsername)) {
    //   myAccount.following.pull(followedUsername);
    //   await myAccount.save();
    //   return res.status(401).json({
    //     success: true,
    //     msg: `${followedUsername} is no longer on your followings`,
    //   });
    // }

    // follow him/her
    followedAccount.followers.push(myUsername);
    await followedAccount.save();

    // add him/her on my following
    myAccount.following.push(followedUsername);
    await myAccount.save();

    res.status(200).json({
      success: true,
      msg: `you have followed ${followedUsername} and ${followedUsername} has been added to your following`,
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
