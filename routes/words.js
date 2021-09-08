// words route module
const { createWords, getAllWords, getWords } = require('../controllers/words')

const router = require('express').Router()

router.post('/:amount', createWords)
router.get('/', getAllWords)
router.get('/:amount', getWords)

module.exports = router