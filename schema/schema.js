// import mongoose from '../connect/connect'

const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    likes: {
        type: Number
    }
})
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: 'Email is required',
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    likedArticleIds: [{
        type: String
    }]
})

const User = new mongoose.model("user", userSchema);

const Article = new mongoose.model("article", articleSchema);

module.exports = { Article, User};