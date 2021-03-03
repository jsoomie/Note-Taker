const express = require("express"); // Pulls in express
const router = express.Router(); // Uses router
const uuid = require("uuid"); // Pulls in ID to create unique ids
const fs = require("fs"); // manipulate file systems
const path = require("path"); // Pulls in path

// Gets any notes to load beforehand
router.get("/notes", (req, res) => {
    const dbPath = "../db/db.json";
    res.sendFile(path.join(__dirname, dbPath));
})

// Able to post notes 
router.post('/notes', (req, res) => {
    const dbPath = "./db/db.json";
    const note = JSON.parse(fs.readFileSync(dbPath));
    const newNote = req.body;
    // Creates ID for notes
    newNote.id = uuid.v4();
    // Pushes the new note into the db.json
    note.push(newNote);
    fs.writeFileSync(dbPath, JSON.stringify(note))
    res.json(note);
})

// Deletes notes according to id
router.delete("/notes/:id", (req, res) => {
    const dbPath = "./db/db.json";
    const note = JSON.parse(fs.readFileSync(dbPath));
    // Delete notes according to their id with the filter method
    const deleteNote = note.filter((delNote) => delNote.id !== req.params.id);
    fs.writeFileSync(dbPath, JSON.stringify(deleteNote));
    res.json(deleteNote);
})

// Exports
module.exports = router;

