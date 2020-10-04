const express = require('express')
const router = express.Router()

const { getYears, addGate, getGatePaper } = require ('../controllers/gate')

router.post('/addGate', addGate)

router.get('/getGateYears', getYears)
router.get('/getGatePaper', getGatePaper)

module.exports = router