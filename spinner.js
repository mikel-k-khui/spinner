let time = 0;
let loopIn = 0;
let count = 5;
const delay = 500;

while (loopIn <= count) {
setTimeout(() => {
  process.stdout.write('\r|   ');
}, time += delay);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, time += delay);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, time += delay);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, time += delay);

++loopIn;
}


setTimeout(() => {
  // Add a new line
  process.stdout.write('\n'); 
}, time);


// ... fill in the rest yourself ...