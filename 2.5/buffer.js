// this file to introduce buffers.
// buffers are low lever data structure, compared to arrays for example,

// here is the difference between string data structure & buffer data structure

const string = "test";
const buffer = Buffer.from("test");
// we could specifiy the encoding as below
// const buffer = Buffer.from("test", 'utf8');

// since string data structure counts character based on default UTF enconding 
// it will print the word with its length 
console.log(`string = `, string, string.length);

// here buffer will print the word with its internal UTF encoding
// It will print the number of bytes it used
console.log(`buffer = `, buffer, buffer.length);

console.log(`buffer converted with correct UTF encoding = `, buffer.toString())

////////////////////////////////////////////////////////
// Buffers are useful when we need to read data of image sent over tcp connection
// Buffers has methods like array, slice, fill, etc. 

// however, when using slice for example, it share the memory with the original buffer
