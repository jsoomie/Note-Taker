// Pulls in required modules
const path = require("path");
const express = require("express");
const router = express.Router();

// Creates paths to index and notes
const homepage = "../public/index.html";
const notepage = "../public/notes.html";

// Routes to notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, notepage));
})

// Routes to homepage
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, homepage));
});

// Exports
module.exports = router;