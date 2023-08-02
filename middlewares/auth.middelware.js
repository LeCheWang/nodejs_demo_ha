require("dotenv").config()
const jwt = require("jsonwebtoken")
const accountModel = require("../models/account.model")
const ErrorResponse = require("../helpers/ErrorResponse")

async function authMiddleware(req, res, next){
    const authorization = req.headers.authorization
    if (!authorization.startsWith("Bearer ")){
        throw new ErrorResponse(401, 'unauthorize')
    }
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.SECRET_KEY)
    const account = await accountModel.findById(decode.id)
    if (!account){
        throw new ErrorResponse(401, 'unauthorize')
    }
    req.account = account;
    next();
}

module.exports = authMiddleware