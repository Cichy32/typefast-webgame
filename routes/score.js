const { saveScore, getHighestScore, getScoreBoard } = require('../controllers/score')
const router = require('express').Router()

router.post('/save', saveScore)
router.post('/highest', getHighestScore)
router.get('/board', getScoreBoard)

module.exports = router