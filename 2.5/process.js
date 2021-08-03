// global object process is an instance of event emmiter

// 2 important listener on process

// it will exit anyway, however, we might need it to log anything before exiting
process.on("exit", (code) => {
  // do one final sync operation before the node process terminates
  console.log("Inside exit event", code);
});

/////////////////////////////////////////
// the default behavior when node has 'uncaughtExecption' is to exit the process
// however, if we add event on it, it will not exit the process

process.on('uncaughtException', (err) => {
  // usually we log the error here 
  console.log(`error = `, err )
})


// any error to trigger above events
console.notFound();