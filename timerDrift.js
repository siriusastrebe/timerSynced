let start = new Date();
let count = 0;

setInterval(() => {
  count++;
  console.log(count * 100 - (new Date() - start));
}, 100);
