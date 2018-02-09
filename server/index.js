require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller/controller');

const app = express(); 

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance);
});


app.get('/api/shelf/:id', controller.getShelves);
app.get('api/bin/:id', controller.getBin);
app.put('/api/bin/:id', controller.updateBin);
app.delete('/api/bin/:id', controller.deleteBin);
app.post('/api/bin/:id', controller.createBin);


const port = process.env.PORT || 3001;
app.listen(port, () => {console.log(`Server listening on port ${port}`)});