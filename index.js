const express = require("express");
const logger = require("morgan");
const routes = require("./src/scripts/routes");
const square = require("./src/scripts/square");
const app = express();
const port = 8000;

// app.use(routes);
app.use(express.static("./src/html"));
// app.get("/", (req, res) => {
//     res.send(`Hello World! The area of a square with a width of 5 is ${square.area(5)}`);
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})