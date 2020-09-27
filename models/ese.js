const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const eseSchema = new Schema({
    year: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model("Ese", eseSchema)