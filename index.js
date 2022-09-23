const express = require('express');

const app = express();

//socket io require
const socket = require('socket.io')

const server = app.listen(4000, () => {
    console.log("listening to port 4000")
})

//static files(all files in public)
app.use(express.static("public"))

//socket io setup
const io = socket(server)

io.on("connection", (socket) => {
    console.log("socket is connected", socket.id)
    //handle chat event
    socket.on('chat', data => {
        io.sockets.emit("chat", data) //send data to front
    })

    socket.on('typing', data => {
        socket.broadcast.emit("typing", data) //send data to front
    })
}) 

