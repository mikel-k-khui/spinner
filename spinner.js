let time = 0;
let loopIn = 0;
let count = 5;
const delay = 100;

while (loopIn <= count) {
  console.log(`          Start loop: ${time}, ${'\r|     '}`)

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
  console.log(`          End loop: ${time}, ${'\r\\   '}`)
++loopIn;
}

setTimeout(() => {
  // Add a new line
  process.stdout.write('\n'); 
}, time);

// ... fill in the rest yourself ...