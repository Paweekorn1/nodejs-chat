<<<<<<< HEAD
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

app.get('/', (req, res)=> { 
    res.sendFile(__dirname + '/index.html'); 
  });
io.on('connection', (socket)=>{
    socket.on('node chat', (msg)=>{
        console.log('message: ' + msg );
        io.emit('node chat', msg);
    })
});

server.listen(3000,() => {
    console.log('listening on *:3000');
=======
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

app.get('/', (req, res)=> { 
    res.sendFile(__dirname + '/index.html'); 
  });
io.on('connection', (socket)=>{
    socket.on('chat message', (msg)=>{
        console.log('message: ' + msg );
        io.emit('chat message', msg);
    })
});

server.listen(3000,() => {
    console.log('listening on *:3000');
>>>>>>> 14376e84a78984b99086ca437a7e78a3cf25c944
});