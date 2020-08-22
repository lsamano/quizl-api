const express = require('express');

const API_PORT = 3000;

const app = express();

app.listen(API_PORT, () => console.log(`Listening on Port ${API_PORT}...`));
