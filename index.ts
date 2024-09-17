import { createServer, type Socket } from "net";

const handleNewConn = (socket: Socket) => {
  console.log(socket);
  console.log(socket.remoteAddress);
  console.log(socket.remotePort);
  socket.on("data", (data) => {
    data;
    console.log("🚀 ~ socket.on ~ data:", data.toString());
    socket.write(`nonsense\n`);
    if (data.includes("q")) {
      socket.end();
      setTimeout(() => {
        socket.write("i am still here");
      }, 1500);
    }
  });
};
const server = createServer(
  {
    allowHalfOpen: true,
  },
  handleNewConn
);
server.listen(1234, "localhost");
server.on("error", (e) => {
  throw e;
});
