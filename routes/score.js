const { saveScore, getHighestScore } = require('../controllers/score')
const router = require('express').Router()

router.post('/save', saveScore)
router.post('/highest', getHighestScore)

module.exports = router