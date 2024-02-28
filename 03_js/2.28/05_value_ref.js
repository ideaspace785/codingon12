//value vs referense
let x=10;
let y=x;
x=20;
console.log(x, y);

let a={value: 10}
let b=a;
console.log("before b=" , b);
a=20;
console.log("a=" , a,"b=", b);