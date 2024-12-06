const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.post("/", (req, res) => {
    console.log("POST req Running");
})

app.listen(PORT, () => console.log("Server Running!"));