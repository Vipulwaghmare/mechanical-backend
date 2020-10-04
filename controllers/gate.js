const Gate = require('../models/gate')
const Question = require('../models/question')

exports.addGate = (req, res) => {
    let gate = new Gate(req.body)
    gate.save((error, gate)=> {
        if(error){
            return res.status(400).json({
                error: "Failed to save Gate Data"
            })
        }
        return res.json(gate)
    })
}

exports.getYears = (req, res ) => {
    Gate.find()
        .exec((error, gate)=> {
            if(error || !gate){
                return res.status(400).json({
                    error: "NO gate data found"
                })
            }
            res.json(gate)
        })
}

exports.getGatePaper = (req, res) => {
    console.log("here")
    return res.json({
        xd: "ds"
    })
}