import {
  parseVerb,
  parseResource,
  parseFileExt,
  generateHeaders,
} from "./parseHttpRequest.js";
import { pathToRequest, readFileContents } from "./pathScripts.js";
import { FileNotFound } from "./errors.js";

const req = async (data, socket) => {
  const request = data.toString();
  console.log(request);

  if (request.startsWith("GET")) {
    const fileRequested = parseResource(request);
    const fileExt = parseFileExt(fileRequested);
    const filePath = pathToRequest(fileRequested);
    try {
      const contents = await readFileContents(filePath);
      const headers = generateHeaders(fileExt, contents.length);

      const body = contents;
      const response = `${headers.join("\r\n")}\r\n${body}`;
      socket.write(response);
      socket.end();
    } catch (error) {
      if (error instanceof FileNotFound) {
        const res = ["HTTP/1.1 404 File Not Found", ""];

        socket.write(res.join("\r\n"));
        socket.end();
        return;
      }
      const res = ["HTTP/1.1 500 Internal Server Error", ""];
      socket.write(res.join("\r\n"));
      socket.end();
      return;
    }
  }
};

export { req };
