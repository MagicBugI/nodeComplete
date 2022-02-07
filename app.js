const express = require('express')
const dataRoute = require('./routes/data')
const bp = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');

const swaggerFile = JSON.parse(fs.readFileSync('./swagger/output.json'))

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))



app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/data' , dataRoute);

mongoose.connection.on("open",()=>{
    console.log("mongodb is connected!!");
});
mongoose.connect('mongodb://localhost:27017/data')
.then(res => app.listen(process.env.PORT || 3000))
.catch(err => console.log(err));