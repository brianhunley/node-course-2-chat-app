const socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //   to: 'teri@example.com',
    //   text: 'Hey, this is Cecil'
    // });

    socket.emit('createMessage', {
      from: 'john@example.com',
      text: 'Hello, this is John. I need some help!'
    })
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New email', email);
// });

socket.on('newMessage', function(message) {
  console.log('newMessage:', message);
});