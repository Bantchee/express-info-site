const express = require("express");
const square = require("./src/scripts/square");

const app = express();
const port = 8000;


app.get("/", (req, res) => {
    res.send(`Hello World! The area of a square with a width of 5 is ${square.area(5)}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})