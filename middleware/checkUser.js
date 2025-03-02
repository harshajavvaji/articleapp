const jwt = require("jsonwebtoken");
const key =
  "ARRJAHHEBBVAKBVANEQWERTYUIOKASDFGHJKZXCVBNMSDFGHJWERTYUASDFGHJKZXCVBNM";

const { User } = require("../schema/schema");

const checkUser = async (req, res, next) => {
  try {
    const token = req.header("token");
    if (!token) {
      return res.status(400).json({ error: "No token found" });
    }
    const userData = jwt.verify(token, key);
    if (!userData) {
      return res.status(400).json({ error: "JWT not valid" });
    }
    const user = await User.findById(userData.userId);
    req.user = user;
    console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = checkUser;
