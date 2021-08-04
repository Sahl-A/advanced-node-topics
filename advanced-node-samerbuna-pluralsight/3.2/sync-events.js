const eventEmmiter = require("events");

class WithLog extends eventEmmiter {
  excute(taskFn) {
    console.log("======= before excuting =========");
    this.emit("begin");
    taskFn();
    this.emit("end");
    console.log("======= after excuting =========");
  }
}

const logger = new WithLog();

logger.on("begin", () => {
  console.log("== About to excute ==");
});
logger.on("end", () => {
  console.log("== Done with excute ==");
});

// this is sync
logger.excute(() => {
  console.log("=== Excuting....... ===");
});
