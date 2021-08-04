const { config } = require("./util");

// to check that global variables are read anywhere
console.log(`answer = `, answer);

// instead of using directly
process.env.PORT;

// we should use it from config module as this is better for managing them

console.log("process.env.PORT = ", config.port);
