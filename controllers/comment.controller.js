const commentModel = require("../models/comment.model")

module.exports = {
    //GET: api/comments/:product_id
    getComments: async (req, res)=>{
        const product_id = req.params.product_id;
        const comments = await commentModel.find({
            product: product_id
        })
        .populate("account")
        .sort({
            createdAt: -1
        })
        return res.status(200).json(comments);
    },
    //POST: api/comments/:product_id
    createComment: async (req, res)=>{
        const account = req.account;
        const product_id = req.params.product_id;
        const body = req.body;
        body.account = account._id;
        body.product = product_id
        const new_comment = await commentModel.create(body);
        return res.status(201).json(new_comment);
    }
}