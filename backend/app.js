const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.post('/api/region', (req, res) => {
    console.log(req.body['_value']);
})


app.listen(8080)