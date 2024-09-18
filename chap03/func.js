let s = 0;
const n = 10;

const f = (number) => {
  return number;
}

for (let i = 1; i < n + 1; i++) {
  s += f(i);
}

console.log( s );
