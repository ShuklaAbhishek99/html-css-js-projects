const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require('socket.io');
const io = new Server(server);


// app.get('/', (req, res)=>{
//     res.send('<h1>hello world</h1>')
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// io.on('event', handler function)
io.on('connection', (socket) => {
    console.log('a user connected');
    // disconnect event
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // chat message event
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg)
    });

    // socket.broadcast.emit('hi')
})

// This will emit the event to all connected sockets
// io.emit('some event', {
//     someProperty: 'some value',
//     otherProperty: 'other value'
// });

server.listen(3000, () => {
    console.log('Server started at 3000')
})