const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Bookmark = require("../models/Bookmark");

// follow me => followers
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
    res.status(500);
    throw new Error("Something went wrong");
  }
};

// follow others => following
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
    if (
      followedAccount.followers.includes(myUsername) ||
      myAccount.following.includes(followedUsername)
    ) {
      followedAccount.followers.pull(myUsername);
      await followedAccount.save();

      myAccount.following.pull(followedUsername);
      await myAccount.save();

      return res
        .status(401)
        .json(
          `you have unfollowed ${followedUsername} and ${followedUsername} is no longer on your followings`
        );
    }

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
    res.status(500);
    throw new Error("Something went wrong");
  }
};

// bookmark post
const bookmarkPost = async (req, res) => {
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

module.exports = { follower, following, bookmarkPost };
