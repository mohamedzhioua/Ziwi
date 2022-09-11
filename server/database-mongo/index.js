const mongoose = require("mongoose");
// const MONGODB_URI = "mongodb+srv://zhioua-mohamed:zhioua-mohamed@cluster0.px2fzry.mongodb.net/ZhiouaHighTechCompany?retryWrites=true&w=majority";
 
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }) 
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err))

const db = mongoose.connection;

module.exports = db