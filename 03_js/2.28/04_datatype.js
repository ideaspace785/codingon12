console.log(true==1);
console.log(false==0);

let big=12345689101112;
console.log(big);
 
let big2=1234567891011121314;
console.log(big2);

// 제일 큰값 제일 작은 값 알아보기. 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
 

// Boolean 알아보기
console.log(10>11);
//output: False

let somebody=null;
console.log(somebody);
//null

let somebody1;
console.log(somebody1);
//undefined

//Symbol 알아보기: 유일한 값이라고 
console.log("Symbol------");
const a1='1';
console.log(typeof a1)
const a2= 1;
console.log(typeof a2)
console.log(a1==a2);

const b1=Symbol('1');
const b2= Symbol('1');
console.log(b1==b2);

//BigInt 
let num=32563856n;

// datatype를 알아보는 명령어 typeof
console.log(typeof num);

let isMale=false;
console.log(typeof isMale);

let selectColor=undefined;
console.log(typeof selectColor);

let selectFont=null;
console.log(typeof selectFont);
//Object로 나오는데 

// Infinity
let x=Infinity;
let y=Infinity;
console.log(x,y, typeof(x), typeof(y));


