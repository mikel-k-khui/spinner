let time = 0;
let numLoop = 0;
let pattern = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
while ( numLoop < 3) {
for (let i of pattern) setTimeout(() => process.stdout.write(i), time += 100);
++numLoop;
}
setTimeout(() => process.stdout.write('\n'), time);
