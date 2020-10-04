const express = require('express')
const router = express.Router()

const { getQuestionById, getQuestionByGateYear, getQuestionByEseYear, addQuestion, deleteQuestion } = require("../controllers/question")

// router.param("questionId", getQuestionById)
// router.get("questionGate", getQuestionByGateYear)
// router.get("questionEse", getQuestionByEseYear)

router.post("/addquestion", addQuestion)
// router.delete("/deletequestion", deleteQuestion)

module.exports = router