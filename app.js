const express = require("express");
const app = express();

app.get("/", (req, res) => {

    const nombre = req.query.name;

    res.send(`<h1> Hola ${nombre} !`)
})


app.listen(3000, () => { console.log("Listening on port 3000...")})
