import express  from 'express';
import http     from 'http';
import SocketIo from 'socket.io';

const app    = express();
const server = http.Server(app);
const io     = new SocketIo(server);
const PORT   = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log(`message: ${msg}`);
    io.emit('chat message', msg);
  });
});

server.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`listen: ${PORT}`);
  }
});
