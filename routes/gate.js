const express = require('express')
const router = express.Router()

const { getYears, addGate } = require ('../controllers/gate')

router.post('/addGate', addGate)
router.get('/getGateYears', getYears)

module.exports = router