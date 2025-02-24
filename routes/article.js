const express = require("express");

const { getArticles, getArticleById, deleteArticle, postArticle, deleteAll, incrementLike, decrementLike, updateArticle } = require('../controllers/likes')

const router = express.Router();

router.get('/all', getArticles)
router.get('/getarticle/:id', getArticleById);
router.delete('/deletearticle/:id', deleteArticle);
router.post('/addArticle', postArticle);
router.delete('/deleteall', deleteAll)
router.put('/like/:id', incrementLike)
router.put('/dislike/:id', decrementLike);
router.put('/updateArticle/:id', updateArticle);


module.exports = router;