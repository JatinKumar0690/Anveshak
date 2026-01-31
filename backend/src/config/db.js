const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully")
    } catch(error) {
        console.error("DB connection failder", error)
    }
}

module.exports = connectDB;