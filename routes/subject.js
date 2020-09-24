const express = require("express");
const router = express.Router()

const { getAllSubjects, addSubject } = require('../controllers/subject')

router.post('/create/subject', addSubject)
router.get('/allsubjects', getAllSubjects);

module.exports = router