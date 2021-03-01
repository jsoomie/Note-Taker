// Pulls in modules
const express = require("express");
const fs = require("fs");

// Init app
const app = express();
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
