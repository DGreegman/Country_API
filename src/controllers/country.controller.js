const Country = require('../models/country.model')
const fs = require('fs');
const path = require('path');
const country = require('../../country.json')

class CountryController {
    async getAllCountries(req, res) {
        try {
                const countries = await Country.find()
                res.json({
                    length: countries.length,
                    countries
                })
            } catch (error) {
                res.status(500).json({ message: 'Error fetching countries' })
            }
    }

    async createCountries(req, res){
        try {
                const { name, popluation, capital, state, tribes, continent} = req.body
                
                const country = new Country({name, popluation, capital, state, tribes, continent})
                await country.save()
                res.json(country)
            } catch (error) {
                // if(error.name === "ValidationError"){
                //     res.status(400).json({
                //         message: error.message
                //     })
                // }
                res.status(500).json({ message: 'Error creating country' })
            }
    }

    async createManyCountries(req, res) {
        try {
            const filePath = path.resolve(__dirname, country);
            const countriesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const countries = countriesData.map((countryData) => new Country(countryData));
            const result = await Country.insertMany(countries);
            res.json(result);
        } catch (error) {
            res.status(500).json({
                    name: error.name,
                    stack: error.stack,
                    message: 'Error creating countries' 
                });
        }
    }


}

const country_controller = new CountryController
module.exports = country_controller