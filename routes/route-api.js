const express = require("express"); // Pulls in express
const router = express.Router(); // Uses router
const uuid = require("uuid"); // Pulls in ID to create unique ids
const fs = require("fs"); // manipulate file systems
const path = require("path"); // Pulls in path

router.get("/notes", (req, res) => {
    const dbPath = "../db/db.json";
    res.sendFile(path.join(__dirname, dbPath));
    console.log("This is the api router.get");
})

router.post('/notes', (req, res) => {
    console.log("This is api router.post ");

    const note = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNote = req.body;
    newNote.id = uuid.v4();
    note.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(note))
    res.json(note);
})

router.delete("/notes/:id", (req, res) => {
    console.log("this is api router.delete");

    const note = JSON.parse(fs.readFileSync("./db/db.json"));
    const deleteNote = note.filter((delNote) => delNote.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
    res.json(deleteNote);
})

module.exports = router;

