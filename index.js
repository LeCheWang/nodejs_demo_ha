require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./configs/database")
const routers = require("./routers")

app.use(express.json())
app.use(express.urlencoded({extended: true}))


connectDB();
routers(app); 

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server run at port ${port}`);
})