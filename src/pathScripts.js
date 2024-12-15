import { fileURLToPath } from "url";
import path from "path";
import { readFile } from "node:fs/promises";
import { FileNotFound } from "./errors.js";

function pathToRequest(file) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  if (file === "/") {
    const publicPath = path.join(
      __dirname,
      "..",
      "src",
      "public",
      "index.html"
    );
    return publicPath;
  }
  const publicPath = path.join(__dirname, "..", "src", "public", file);

  return publicPath;
}

async function readFileContents(filePath) {
  try {
    const contents = await readFile(filePath);
    return contents;
  } catch (err) {
    console.log("Resource not found");
    throw new FileNotFound();
  }
}

export { pathToRequest, readFileContents };
