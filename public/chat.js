//create connection
const socket = io.connect('http://localhost:4000')

output = document.getElementById("output");
btn = document.getElementById("send");
message = document.getElementById("message");
handle = document.getElementById("handle");



//listen click event on the button
btn.addEventListener("click", () => {
    //send data from the front to the server
    socket.emit("chat", {
        message: message.value,
        handle: handle.value,

    })
})

//listening news from the server
socket.on('chat', (data) => {
    output.innerHTML += "<p><strong>" +data.handle+ ": </strong>" + data.message + "</p>"  
})