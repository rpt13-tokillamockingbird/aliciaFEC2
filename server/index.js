const express = require('express');
const bodyparser = require('body-parser');
const faker = require('faker');
const port = 3001;

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/:id', express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`app listening on port ${port}`));
