// website route module
const { renderSite, renderGame, getText } = require('../controllers/website')

const router = require('express').Router()
router.get('/', renderSite)
router.post('/game', renderGame)

router.get('/text', getText)

module.exports = router