const  jwt  = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")


const authMiddleware = (req, res, next) =>{
    const token = req.headers.authorization;

    if(!token)
    {
        return res.status(400).json({
            msg :" please send a token"
        })
    }

    try {
        const decode = jwt.verify(token, JWT_SECRET)
        req.userId = decode.userId;
        next();
    } catch (error) {
        return res.json({
            msg : "please send a valid token ",
            error : error
        })
    }
    
}

module.exports = {
    authMiddleware
}

