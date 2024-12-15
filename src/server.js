import net from "net";
import { req } from "./httpHandlers.js";
const server = net.createServer((socket) => {
  console.log("client connected");
  socket.on("end", () => {
    console.log("client disconnected");
  });
  socket.on("data", (data) => req(data, socket));
});
server.on("error", (err) => {
  throw err;
});
server.listen(8124, "0.0.0.0", () => {
  console.log("server listening on 8124");
});

export default server;
