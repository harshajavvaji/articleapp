const express = require("express");

const { getArticles, getArticleById, deleteArticle, postArticle, deleteAll, updateLike, updateArticle, register,updateUser, deleteUser, getUserById, getAllUsers, login } = require('../controllers/likes');
const checkUser = require("../middleware/checkUser");

const router = express.Router();

router.get('/all', getArticles)
router.get('/getarticle/:id', getArticleById);
router.delete('/deletearticle/:id', deleteArticle);
router.post('/addArticle', postArticle);
router.delete('/deleteall', deleteAll)
router.put('/updatelike/:id', checkUser, updateLike);
router.put('/updateArticle/:id', updateArticle);


// user routes
router.post('/register', register)
router.put('/update/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)
router.delete('/deleteall', deleteAll)
router.get('/get/:id', checkUser, getUserById)
router.get('/getall', getAllUsers)
router.post('/login', login)

module.exports = router;