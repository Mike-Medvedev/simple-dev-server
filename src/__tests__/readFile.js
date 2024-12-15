import { readFile } from "fs";

const buffer = readFile("../public/index.html", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
