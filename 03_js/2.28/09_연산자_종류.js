/**연산자 종류
 * 산술
 */
console.log(1+1);
console.log(10-1);
console.log(10*2);
console.log(10/2);
console.log(10%2);

console.log("'1'==1", '1'== 1);
console.log("'1'===1", '1'=== 1);

console.log("'1' !==1", '1' !==1 );

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log("&& and, || or");
console.log( true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("--------------------------");
console.log(!(2>1));
console.log(!(2<1));


console.log('0'==false);
console.log(''==0);

let num=10;
console.log(++num);
console.log(num);

let x=10;
console.log(x+10);

//Falsy 가 되는 경우인데 이때 뒤에꺼 출력된다. 
console.log(false || true);
console.log(false || "John");
console.log(false || 1);

let userColor='red';
let defaultColor="blue";
let currentColor= userColor || defaultColor;
console.log('현재 color: ', currentColora)

// 연산자 중에 삼항 연산자
let points=110;
let type=points >100 ? "gold" : "silver"
console.log(type);