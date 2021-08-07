// This script to generate dummy files, so we can run solution script |
// to delete from them

const fs = require("fs");
const path = require("path");
const dirname = path.join(__dirname, "files");

// create directory nammed files
fs.mkdirSync(dirname);

// get number of milliseconds in 1 day
const ms1Day = 24 * 60 * 60 * 1000;

for (let i = 0; i < 10; i++) {
  const filePath = path.join(dirname, `file${i}`);
  // create each file with content 'hello' then modify the creating data
  fs.writeFile(filePath, "hello", (err) => {
    if (err) throw err;

    const time = (Date.now() - i * ms1Day) / 1000;
    fs.utimes(filePath, time, time, (err) => {
      if (err) throw err;
    });
  });
}
