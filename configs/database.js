const mongoose = require("mongoose")

module.exports = connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://root:123@cluster0.70cd3.mongodb.net/demo_ha?retryWrites=true&w=majority")
        console.log("kết nối db thành công");
    } catch (error) {
        console.log("lỗi kết nối db: " + error.message);
    }

}