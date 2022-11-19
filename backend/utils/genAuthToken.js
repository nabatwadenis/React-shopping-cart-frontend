const jwt =require("jsonwebtoken");

const genAuthToken =(user) =>{
    const secretkey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({
        _id: user._id, name: user.name, email: user.email
    }, secretkey);
    return token;

}
module.exports = genAuthToken;