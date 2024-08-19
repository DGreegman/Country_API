const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const country_route = require('./routes/country.route')
const app = express()
dotenv.config()

connectDB()


const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use('/api/v1/country', country_route)
app.listen(port, () => console.log(`App started on port ${port}`))