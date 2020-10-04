const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
    question: {
        type: String,
        required: true,
        maxlength:500,
    },
    photo: {
        type: Buffer,
        contentType: String,
        required: false,
    },
    gateYears: {
        type: Array,
        required: false
    },
    eseYears: {
        type: Array,
        required: false
    },
    a: {
        type: String,
        required: true,
    },
    b: {
        type: String,
        required: true,
    },
    c: {
        type: String,
        required: true,
    },
    d: {
        type: String,
        required: true,
    },
    correct_option:{
        type: String,
        required: true
    },
    ans: {
        type: String,
        required: true,
    },
    answerPhoto : {
        type: Buffer,
        required: false,
    },
})

module.exports = mongoose.model("Question", questionSchema)