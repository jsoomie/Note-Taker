// Pulls in modules
const express = require("express");
const fs = require("fs");

const db = require("./db/db.json");

// Init app and server
const app = express();
const PORT = process.env.PORT || 5000;

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello from express!");
    console.log(db);
})

app.post("/", (req, res) => {
    console.log("Post request to the home page");
})


// Start server
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
