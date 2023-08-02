const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    account: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'account'
    },
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'product'
    }
}, { 
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("comment", commentSchema)