const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const port = process.env.HTTP_PORT || 3001;

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/:id', express.static(path.join(__dirname + '/../client/dist')));

app.listen(port, () => console.log(`app listening on port ${port}`));
