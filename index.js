// Pulls in modules
const express = require("express");

// Pulls in the routes
const routeHtml = require("./routes/route-html.js");
const routeAPI = require("./routes/route-api.js");

// Init app and server
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/api", routeAPI);
app.use("/", routeHtml);

// Start server
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
