const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/api')
const bodyParser = require('body-parser')

const app = express()
const PORT = 6000

const dbURI = 'mongodb+srv://blog:blog1234@pandatcommunity.pefp1.mongodb.net/restapituts?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false })
    .then((result) => {
        app.listen(PORT);
        console.log('Listening to port ' + (PORT || process.env.PORT));
        console.log('Database also connected')
    })
    .catch(err => { console.log(err); })

app.use(bodyParser.json());
app.use('/api', routes);