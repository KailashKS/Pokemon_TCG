
const express = require('express')
const app = express();

const http = require('http').createServer(app);

const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
})


//const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user x connected');
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    });
    });

/*io.on('new-message', (message) => {
    socket.emit(message);
  });*/

http.listen(3000);
