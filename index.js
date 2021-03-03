// Pulls in modules
const express = require("express");
const fs = require("fs");
const path = require("path");

// Pulls in the routes
const routeHtml = require("./routes/route-html.js");

// Pulls in database
const db = require("./db/db.json");

// Init app and server
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Middleware: routes to htmls
app.use("/", routeHtml);

// Get posts
app.post("/", (req, res) => {
    console.log("Post request to the home page");
})

// Start server
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
