const express = require("express");

const { getArticles, getArticleById, deleteArticle } = require('../controllers/likes')

const router = express.Router();

router.get('/all', getArticles)
router.get('/getarticle/:id', getArticleById);
router.delete('/deletearticle/:id', deleteArticle);


module.exports = router;