const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    shortName: {
        type: String,
        required: true,
        maxlength: 5
    },
    subtopics: {
        type: Array,
        required: true,
    }
})

module.exports = mongoose.model("Subject", subjectSchema);
