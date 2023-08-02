require('dotenv').config()
const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")

const accountSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    }
}, {
    versionKey: false,
    timestamps: true
})

accountSchema.pre('save', function(next) {
    const account = this;
    if (account.password){
        account.password = bcryptjs.hashSync(account.password, +process.env.SALT_ROUND)
    }
    next();
})

accountSchema.set("toJSON", {
    transform: function (doc, ret, options) { 
        delete ret.password
    }
})

module.exports = mongoose.model("account", accountSchema)