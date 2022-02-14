const express = require('express')
const dataRoute = require('./routes/data')
const bp = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')

const swaggerFile = JSON.parse(fs.readFileSync('./swagger/output.json'))

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/data' , dataRoute);

mongoose.connection.on("open",()=>{
    console.log("mongodb is connected!!");
});
mongoose.connect(process.env.DB_ROOT)
.then(res => app.listen(3000))
.catch(err => console.log(err));