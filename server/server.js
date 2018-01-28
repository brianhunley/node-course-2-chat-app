const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage, generateLocationMessage } = require('./utils/message');
const { isRealString } = require('./utils/validation');
const { Users } = require('./utils/users');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const users = new Users();

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit from Admin text Welcome to the chat app
  // socket.broadcast.emit from Admin text New user joined

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return callback('Name and room name are required');
    };

    // socket.join('The Walking Dead Fans') or socket.join(params.room)
    // socket.leave('The Walking Dead Fans')
    // io.emit - sends to every connected user
    // socket.broadcast.emit - sends to every connected user, except the current user
    // socket.emit - sends to just one user

    // io.emit -> io.to('The Walking Dead Fans').emit
    // socket.broadcast.emit -> socket.broadcast.to('The Walking Dead Fans').emit
    // socket.emit -> stays the same, since you're sending to just one user

    // join the user to the room from the parameter list
    socket.join(params.room);

    // make sure there's no user with the new user id currently in the user list
    users.removeUser(socket.id);

    // add the user to the user list
    users.addUser(socket.id, params.name, params.room);

    // send the new user list to all the connected users
    io.to(params.room).emit('updateUserList', users.getUserList(params.room));

    // greet the individual user
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    // greet all the users except the one that connected
    // socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
    socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`));

    callback();
  });

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage:', message);
    // emit to all connections
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    const user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});