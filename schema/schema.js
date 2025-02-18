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

const article = new mongoose.model("article", articleSchema);

module.exports = article;