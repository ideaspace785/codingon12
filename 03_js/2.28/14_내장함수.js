//random() 0-1사이의 값을 랜점으로 추출
console.log(Math.random());
console.log(Math.round(0.9), Math.round(0.3),Math.round(0.5)) //0.5는 윗올립된다. 
console.log(Math.round(-5.05),)

console.log(Math.max(1,2,3));
console.log(Math.min(1,2,3));

console.log('-----------문자열 내장 함수------')
let msg="This is my first message"

// let result1=msg.includes('my') // true
// let result2=msg.includes('your') //false
// let result3=msg.startsWith('This')// true
// let result4=msg.startsWith('this')//false
// let result5=msg.endsWith('e') // true
// let result6=msg.indexOf('my') // 8
// let result7=msg.replace('first', 'second')
// let result8=msg.toUpperCase()

// console.log(result1,result2, result3, result4)
// console.log(result5,result6, result7, result8)

let str="  This is my second message   ";
let result1=str.toLowerCase
let result2=str.trim() //시작과 끝부분에서 공백을 없애준다. 
let result3=str.trimStart()
let result4=str.trimEnd()
let result5=str.split(' ')// 공백을 기준으로 글자를 분리
let result6=str.split('') //그냥 한 글자씩 분리 

console.log(result1,result2, result3, result4)
console.log(result5,result6)

// escape notation \'  , \n
const msg1= "  This is \' my first message";
const msg2= "  This is \n my first message";
console.log(msg1);
console.log(msg2);


