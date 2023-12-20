const { body } = require("express-validator");

const loginValidator = [
  body("username", "username field cannot be empty").not().isEmpty(),
  body("username", "your username must be more than 3 characters ").isLength({
    min: 3,
  }),
  body(
    "username",
    "your username must not be more than 60 characters "
  ).isLength({ max: 60 }),
  body("password", "password field cannot be empty").not().isEmpty(),
  body("password", "The minimum password length is 6 characters").isLength({
    min: 6,
  }),
];

const registerValidator = [
  body("username", "username field cannot be empty").not().isEmpty(),
  body("username", "your username must be more than 3 characters ").isLength({
    min: 3,
  }),
  body(
    "username",
    "your username must not be more than 60 characters "
  ).isLength({ max: 60 }),
  body("fullname", "fullname field cannot be empty").not().isEmpty(),
  body("fullname", "your fullname must be more than 3 characters ").isLength({
    min: 3,
  }),
  body(
    "fullname",
    "your fullname must not be more than 60 characters "
  ).isLength({ max: 60 }),
  body("password", "password field cannot be empty").not().isEmpty(),
  body("password", "The minimum password length is 6 characters").isLength({
    min: 6,
  }),
];

const postValidator = [
  body("authorId", "post must have an author").not().isEmpty(),
  body("postData", "your post cannot be empty").not().isEmpty(),
  body(
    "postData",
    "your post content must not be more than 150 characters"
  ).isLength({ max: 150 }),
];

const commentValidator = [
  body("authorId", "comment must have an author").not().isEmpty(),
  body("postId", "comment must have a post").not().isEmpty(),
  body("commentData", "your comment cannot be empty").not().isEmpty(),
  body(
    "commentData",
    "your comment content must not be more than 150 characters"
  ).isLength({ max: 150 }),
];

module.exports = { loginValidator, registerValidator, postValidator, commentValidator };
