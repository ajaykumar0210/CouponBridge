const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome Home! :)");
});

app.listen(5050, () => {
    console.log("The server start on port 5050");
});