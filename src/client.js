import net from "net";

const client = net.createConnection(
  { port: 8124, host: "127.0.0.1" },
  (s) => {}
);
client.write("yo");
