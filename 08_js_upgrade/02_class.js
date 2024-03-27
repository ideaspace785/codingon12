//class 기본 형식
// ---------class Car-----------
// class Car{
//     constructor(){
//     }
//     method1(){}
//     method2(){}
//     method3(){}
// }
// ---------class User-----------
// class User{
//     constructor(name){
//        this.name=name;
//     }
//     sayHi(){
//         console.log(`${this.name} 안녕하세요`);
//     }
// }

// let user=new User("현희");
// user.sayHi();
// let user1=new User("YeYe");
// user.sayHi();

// ---------class를 fucntion으로 구성하기-----------
function User(name){
    this.name=name;
}
User.prototype.sayHi=function(){
    console.log(this.name);
}
let user2= new User('John')
user2.sayHi();