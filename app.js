const express=require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
//Test end point
app.get('/', (req, res) => {
  res.send("HEeyy");
});

io.on('connection', (socket)=>{

socket.on(("connected"),(data)=>{
 
  socket.broadcast.emit("UserJoined",data);
  
})
///onRecieveMessage
socket.on(("OnSendMessage"),(data)=>{
  socket.broadcast.emit("OnRecieveMessage",data);
})






});

server.listen(3000, () => {
  console.log('listening on *:3000');
});