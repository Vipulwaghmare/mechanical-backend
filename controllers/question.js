const Question = require("../models/question")
const formidable = require('formidable')
const _ = require('lodash')
const fs = require("fs")

exports.addQuestion = (req, res ) => {
    const form = new formidable.IncomingForm()
    form.keepExtensions = true;
    
    form.parse(req, (err, fields, file) => {
        if (err) {
                return res.status(400).json({
                error: "problem with image"
            });
        }
    // destructuring fields
    const { question, gateYears, eseYears, a, b, c, d, correct_option, ans } = fields
    
    if(!question || !a || !b || !c || !d || !correct_option || !ans){
        return res.status(400).json({
            error: "Include all the fields"
        })
    }

    // making question
    let quest = new Question (fields);

    // handle photos here
    if(file.photo){
        if(file.photo.size > 1000000){
            return res.status(400).json({
                error: "File size too large"
            })
        }
        quest.photo.data = fs.readFileSync(file.photo.path);
        quest.photo.contentType = file.photo.type;
    }
    if(file.answerPhoto){
        if(file.answerPhoto.size > 1000000){
            return res.status(400).json({
                error: "File size too large"
            })
        }
        quest.answerPhoto.data = fs.readFileSync(file.photo.path);
        quest.answerPhoto.contentType = file.photo.type;
    }
    // saving in DB
    quest.save((error, question)=> {
        if(error){
            res.status(400).json({
                error: "Saving question in DB failed"
            })
        }
        res.json(question)
    })
    })
}

// exports.getQuestionById = (req, res, id, next ) => {
//     Question.findById(id).exec((error, q)=>{
//         if(error || !q){
//             return res.status(400).json({
//                 error: "NO question found"
//             })
//         }
//         req.questionId = q
//         next()
//     })
// }

// exports.getQuestionByGateYear = (req, res) => {

// }

// exports.getQuestionByEseYear = (req, res) => {

// }