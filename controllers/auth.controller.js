require("dotenv").config()
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")
const accountModel = require("../models/account.model")
const ErrorResponse = require("../helpers/ErrorResponse")

module.exports = {
    login: async (req, res)=>{
        const {username, password} = req.body;
        const account = await accountModel.findOne({username})
        if (!account){
            throw new ErrorResponse(400, "Tài khoản hoặc mật khẩu không đúng!")
        }

        const checkPass = bcryptjs.compareSync(password, account.password)
        if (!checkPass){
            throw new ErrorResponse(400, "Tài khoản hoặc mật khẩu không đúng!")
        }
        
        //tạo ra chuỗi token
        const payload = {
            id: account._id,
            username: account.username,
            role: account.role
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '15m'
        })

        return res.status(200).json({
            ...payload,
            token
        })
    }
}