const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    name: {
            type: String,
            require: true
    },

    population: {
        type: String,
        require: true
    },
    capital: {
        type: String,
        require: true
    },
    state: {
        type: Number,
        require: true
    },
    
    tribe: {
        type: Number,
        require: true
    },
    continent: {
        type: String,
        require: true
    }
    
},
{
    versionKey: false
}
)

const Country = mongoose.model('country', countrySchema)
module.exports = Country