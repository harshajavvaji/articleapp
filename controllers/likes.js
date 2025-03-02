const { Article, User } = require('../schema/schema')
// const mongoose = require("mongoose");

// const User = require('../schema/schema')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    try {
    const { name, email, password} = req.body;
    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.status(200).json({message: 'User already exists'})
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    // create new user
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    await newUser.save();
    return res.status(200).json({message: 'User created sucessfully'})
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        updatedFields = {};
        if(name) updatedFields.name = name;
        if(email) updatedFields.email = email
        if(password) {
            const salt = await bcrypt.genSalt(10);
            updatedFields.password = await bcrypt.hash(password, salt);
        }
        const updated = await User.findByIdAndUpdate(
            id,
            updatedFields,
            {
            new: true, runValidators: true
            }
    )

    if(!updated){
        return res.status(404).json({message: "User not found"})
    }
        return res.status(200).json(updated)

    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const toBeDeletedUser = await User.findByIdAndDelete(
            id
        ) 
        res.status(200).send();
    } catch (error) {
        console.log(error)
    }
}

// const deleteAllUsers = async (req, res) => {
//     try {
//         const deleteall = await User.deleteMany({});
//         res.status(200).send('deleted all users')
//     } catch (error) {
//         console.log(error)
//     }
// }


const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).send(allUsers);        
    } catch (error) {
        console.log(error)
    }
}


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
        const updatedArticle = await Article.findByIdAndUpdate(id, {$inc: { likes : 1 }}, {new: true})
        res.status(200).json({updatedArticle});
    } catch (error) {
        console.log(error)
    }
}


const decrementLike = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedArticle = await Article.findByIdAndUpdate(
            id,
            {$inc : { likes : -1 }} , {new : true}
        );
        return res.status(200).json({updatedArticle})

    } catch (error) {
        console.log(error)
    }
}

const updateArticle = async (req, res) => {
    try {
        const { name, description, image } = req.body;
        const { id } = req.params;
        const updatedarticle = await Article.findByIdAndUpdate(id,
            {name, description, image }, {new : true}
        )
        return res.status(200).json({updatedarticle})
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


module.exports = {getArticles, getArticleById, deleteArticle, postArticle, incrementLike, decrementLike, updateArticle, register, updateUser, deleteUser, deleteAll, getUserById, getAllUsers };