const express = require("express")

const router = express.Router()

const asyncMiddleware = require("../middlewares/async.middleware")
const authMiddleware = require('../middlewares/auth.middelware')

const { 
    getAccounts,
    createAccount,
    updateAccount,
    deleteAccount
} = require("../controllers/account.controller")

router
.route("/")
.get(asyncMiddleware(authMiddleware), asyncMiddleware(getAccounts))
.post(createAccount)

router
.route("/:id")
.patch(updateAccount)
.delete(deleteAccount)


module.exports = router