//Object 객체를 선언하는 3가지 방법

//1.
let person1= new Object();
person1.name='Mike';
person1.age=22;
person1.sayHi= function(){
    console.log(`Hello ${this.name}`)
}
console.log(person1)
console.log(person1.sayHi())

//2.
let person2= {
    name:"John",
    age: 30,
    sayHi:function(){
    console.log(`Hello ${this.name}`)
}
}

console.log(person2)
console.log(person2.sayHi())

//3 함수를 통해 객체를 생성
function Person(name, age){
    this.name=name;
    this.age=age;
    this.sayHi=function(){
        console.log(`Hello ${this.name}`)
    }
}
let person3= new Person('Willy', 28)
console.log(person3)
console.log();
//3번째의 모양은 클래스와 비슷하다.

