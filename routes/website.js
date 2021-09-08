// website route module
const { renderSite, getText } = require('../controllers/website')

const router = require('express').Router()
router.get('/', renderSite)

router.get('/text', getText)

module.exports = router