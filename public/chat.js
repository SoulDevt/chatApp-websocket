//create connection
const socket = io.connect('http://localhost:4000')


//get elements needed from index.html
output = document.getElementById("output");
btn = document.getElementById("send");
message = document.getElementById("message");
handle = document.getElementById("handle");
feedback = document.getElementById("feedback");




//listen click event on the button
btn.addEventListener("click", () => {
    //send data from the front to the server
    socket.emit("chat", { //name and elements that we want to send
        message: message.value,
        handle: handle.value,

    })
})

message.addEventListener("keypress", () => {
    //send data from the front to the server
    socket.emit("typing", { //name and elements that we want to send
        handle: handle.value,
    })
})

//listening new event from the server chat
socket.on('chat', (data) => {
    feedback.innerHTML=""
    output.innerHTML += "<p><strong>" +data.handle+ ": </strong>" + data.message + "</p>"  
})

//listening new event from the server typing
socket.on('typing', (data) => {
    feedback.innerHTML = "<p><em>" +data.handle+" is typing<em></p>"  
})