const express = require('express')
const router = express.Router()

const { getYears, addEse } = require ('../controllers/ese')

router.post('/addEse', addEse)
router.get('/getEseYears', getYears)

module.exports = router