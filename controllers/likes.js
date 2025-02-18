const Article = require('../schema/schema')
// const mongoose = require("mongoose");


// const postArticle

// const incrementLike

// const decrementLike

// const getArticle

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


module.exports = {getArticles, getArticleById, deleteArticle};