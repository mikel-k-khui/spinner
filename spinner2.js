let time = 0;
const delay = 100;
let pattern = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
for (let i of pattern) setTimeout(() => process.stdout.write(i), time += delay);
setTimeout(() => process.stdout.write('\n'), time);
