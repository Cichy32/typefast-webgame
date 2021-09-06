const { renderSite } = require('../controllers/website')

const router = require('express').Router()
router.get('/', renderSite)

module.exports = router