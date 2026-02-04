const express = require("express");
const path = require("path");
const app = express();

let TODO = [];
let com_todo = [];

app.use(express.json());
app.use(express.static("public"));

// HOME PAGE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// ADD TODO
app.post("/add_todo", (req, res) => {
    const todo = {
        id: Date.now(),
        text: req.body.text
    };

    TODO.push(todo);
    res.json({ success: "Todo added", TODO });
});

// DELETE TODO
app.delete("/delete_todo/:id", (req, res) => {
    const id = req.params.id;
    TODO = TODO.filter(todo => todo.id != id);
    res.json({ success: "Todo deleted" });
});

// COMPLETE TODO
app.post("/comp_todo/:id", (req, res) => {
    const id = req.params.id;

    const completed = TODO.find(todo => todo.id == id);
    com_todo.push(completed);

    TODO = TODO.filter(todo => todo.id != id);

    res.json({ success: "Todo completed" });
});

// GET TODOS
app.get("/todos", (req, res) => {
    res.json(TODO);
});

// GET COMPLETED TODOS
app.get("/completed", (req, res) => {
    res.json(com_todo);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});