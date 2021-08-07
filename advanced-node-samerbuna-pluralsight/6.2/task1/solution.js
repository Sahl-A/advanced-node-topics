// just run this script in terminal to get files fixed
// We have corrupted files in corrupted-files directory
// Each corrupted data file has duplicate data. 
// We need to run a script here to fix this

const fs = require("fs");
const path = require("path");
const dirname = path.join(__dirname, "corrupted-files");

const files = fs.readdirSync(dirname);

files.forEach((file) => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => {
    if (err) throw err;

    fs.truncate(filePath, Math.round(stats.size / 2), (err) => {
      if (err) throw err;
    });
  });
});
