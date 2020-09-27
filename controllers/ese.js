const Ese = require('../models/ese')

exports.addEse = (req, res) => {
    let ese = new Ese(req.body)
    ese.save((error, ese)=>{
        if(error){
            return res.status(400).json({
                error: "Failed to save Ese data"
            })
        }
        return res.json(ese)
    })
}

exports.getYears = (req, res ) => {
    Ese.find()
        .exec((error, ese)=> {
            if(error || !ese){
                return res.status(400).json({
                    error: "NO ese data found"
                })
            }
            res.json(ese)
        })
}