const Post = require("../models/post");
const User = require("../models/user");
const AWS = require("aws-sdk");

module.exports = {
    index
}

function index(req, res) {
    Post.find({}).populate('user').exec((err, posts) => {
        res.render("matcher/index", {
            posts,
            user: req.user
        })
    })
}