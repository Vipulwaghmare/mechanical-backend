const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const gateSchema = new Schema({
    year: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model("Gate", gateSchema)