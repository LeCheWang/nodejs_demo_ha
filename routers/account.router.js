const express = require("express")

const router = express.Router()

const { 
    getAccounts,
    createAccount,
    updateAccount,
    deleteAccount
} = require("../controllers/account.controller")

router
.route("/")
.get(getAccounts)
.post(createAccount)

router
.route("/:id")
.patch(updateAccount)
.delete(deleteAccount)


module.exports = router