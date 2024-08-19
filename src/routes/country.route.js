const express = require('express')
const router = express.Router()
const countries_controller = require('../controllers/country.controller')

// router.route('/').post(countries_controller.createManyCountries)
router.route('/').post(countries_controller.createCountries)
router.route('/').get(countries_controller.getAllCountries)

module.exports = router