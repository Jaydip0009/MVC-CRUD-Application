const express = require('express')
const dbconnect = require('./config/db');
const UserRoute = require('./routes/route');
const app = express()

app.use(express.json());
app.use('/', UserRoute)

app.listen(8090, ()=> {
    console.log("listening on port 8090");    
    dbconnect()
})