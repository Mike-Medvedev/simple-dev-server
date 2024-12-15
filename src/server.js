import net from "net";

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

const req = (data, socket) => {
  const request = data.toString();
  console.log("Printing request from GET request:", request);

  if (request.startsWith("GET")) {
    const headers = ["HTTP/1.1 200 OK", "Content-Type: text/html", ""];

    const body = "<div>Yo</div>";
    const response = `${headers.join("\r\n")}\r\n${body}`;

    socket.write(response);
    socket.end();
  }
};

export default server;
