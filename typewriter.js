const { type } = require("os");
const { stringify } = require("querystring");


const sentence = "testing the typewriter";

let time = 2000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 100;
}
setTimeout(() => {
  process.stdout.write("\n");
}, time);