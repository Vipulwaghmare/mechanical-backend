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
        required: false,
    },
    a: {
        type: Text,
        required: true,
    },
    b: {
        type: Text,
        required: true,
    },
    c: {
        type: Text,
        required: true,
    },
    d: {
        type: Text,
        required: true,
    },
    ans: {
        type: Text,
        required: true,
    },
    answerPhoto : {
        type: Buffer,
        required: true,
    },
})