const Subject = require('../models/subjects')

exports.addSubject = (req, res) => {
    let subject = new Subject(req.body)
    subject.save((error, subject)=> {
        if(error){
            return res.status(400).json({
                error: "Failed to save subject"
            })
        }
        return res.json({
            subject
        })
    })
}

exports.removeSubject = (req, res ) => {
    console.log("removesubject")

}

exports.getAllSubjects = (req, res) => {
    Subject.find()
       .select("name")
       .exec((error,subjects)=>{
           if(error|| !subjects){
               return res.status(400).json({
                   error: "No subject found"
               })
           }
           res.json(subjects)
       }) 
}