const express = require('express');

const app = express();

const server = app.listen(4000, () => {
    console.log("listening to port 4000")
})

//static files
app.use(express.static("public"))