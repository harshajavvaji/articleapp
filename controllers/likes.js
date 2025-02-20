const Article = require('../schema/schema')
// const mongoose = require("mongoose");


const postArticle = async (req, res) => {
    try {
        const { name, description, image, likes } = req.body;
        console.log("*******", req.body)
        // if(!name || !description){
        //     return res.status(400).json({message: "name and description are required"})
        // }
        console.log("Success")
        const article = await Article.create({ name, description, image, likes });
        res.status(201).send({message: "Article added successfully", article})
    } catch (error) {
        console.log(error)
    }
}

const incrementLike = async (req, res) => {
    try {
        const { id } = req.params
        const likeCount = Article.findByIdAndUpdate(id, {$inc: { likes : 1 }}, {new: true})
        res.status(200).json(likeCount.toObject());
    } catch (error) {
        console.log(error)
    }
}

const deleteAll = async (req, res) => {
    try {
        const articles = await Article.deleteMany({}); 
        res.status(200).send()
    } catch (error) {
        console.log(error)
    }
}


const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndDelete(id)
        res.status(200).send();
    } catch (error) {
        console.log(error)
    }
}

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).send(articles)
        console.log(articles)
    } catch (error) {
        console.log(error)
    }
}

const getArticleById = async (req, res) => {
    try {
        const { id } = req.params
        const article = await Article.findById(id);
        res.status(200).send(article)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getArticles, getArticleById, deleteArticle, postArticle, deleteAll, incrementLike };