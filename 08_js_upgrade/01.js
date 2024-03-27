//구조분해-배열

const arr1=[1,2,3,4,5];
const arr2=['😊','🌸','🎉','🫠','😒', '😶‍🌫️'];

let num1=10;
let num2=20;
 [num1, num2]=[num2, num1];
 console.log("num1: ", num1);

 const obj={
    title: "Queen of Tears",
    star: 5,
    actor: "KimSoohyun"
 }
 console.log(obj.title, obj.actor)
 console.log("Rate:",obj["star"])

 const info={
    name:'full-stack',
    time: '09-14:00',
    content:"YeYe"
 }
 function getInfo(lecture){
    const {name, time, content}=lecture;
    const output= `${name} 강의는 ${time} 이고 ${content}`
    return output
 }
 console.log(getInfo(info))
// and문 둘다 참이어야 참 ------------------------------
console.log(true && true)  //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

// or 둘중 하나 참이면 참 ------------------------------
console.log(true && true)  //true
console.log(true && false) //true
console.log(false && true) //true
console.log(false && false) //false

//spread 연산자
const a=[1,2,3];
const b=[4,5,6];
const result=[...a, ...b];
console.log('result1:', result)

const str="HELLO"
console.log(str); //HELLO
console.log(...str); //H E L L O 

console.log(str.split("")); //["H","E",..

//-----------------
const chip={
    base: 'chip',
    company:"samsung"
}

const spreatics={
    ...chip,
    address:"마포구"
}
console.log(spreatics)



 
 

