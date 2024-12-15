function parseVerb(httpRequest) {
  return httpRequest.split("\r\n")[0].split(" ")[0];
}

function parseResource(httpRequest) {
  const requestLine = httpRequest.split("\r\n")[0];
  const url = requestLine.split(" ")[1];
  console.log("Requested Resource -->", url);

  return url;
}

function parseFileExt(resource) {
  if (resource === "/") return "html";
  const extension = resource.split(".")[1];

  return extension;
}

function parseClient(httpRequest) {
  return httpRequest.split("\r\n").filter((_, index) => index === 1);
}

function generateHeaders(fileExt, contentLength) {
  const extensionMap = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    png: "image/png",
    svg: "image/svg+xml",
    default: "text/plain",
  };
  const headers = [
    "HTTP/1.1 200 OK",
    `Content-Type: ${extensionMap[fileExt] || extensionMap.default}`,
    `Content-Length: ${contentLength}`,
    "Connection: close",
    "",
  ];

  return headers;
}

export { parseVerb, parseResource, parseClient, parseFileExt, generateHeaders };
