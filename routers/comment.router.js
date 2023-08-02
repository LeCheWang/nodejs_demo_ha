const express = require("express")
const router = express.Router()

const {
    getComments,
    createComment
} = require("../controllers/comment.controller")

router
    .route("/:product_id")
    .get(getComments)
    .post(createComment);

module.exports = router;