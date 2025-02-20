const express = require("express");

const { getArticles, getArticleById, deleteArticle, postArticle, deleteAll, incrementLike } = require('../controllers/likes')

const router = express.Router();

router.get('/all', getArticles)
router.get('/getarticle/:id', getArticleById);
router.delete('/deletearticle/:id', deleteArticle);
router.post('/addArticle', postArticle);
router.delete('/deleteall', deleteAll)
router.put('/like/:id', incrementLike)


module.exports = router;