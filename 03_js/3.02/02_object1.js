/**
 * (Object) 객체:
 */
//객체는 {} 사용, 배열은 [], ()
 let user={
    name:'Kim',
    age: 23,
    address: "Mongolia",
    sayHi:function(){
        console.log("Sain baina uu?")
    }
 }
 //객체를 불러오는 방법 . , []
console.log( user.name)
console.log(user['name'])
console.log(user.age)
console.log(user['age'])
console.log(user.address)
console.log(user['address'])
user.sayHi()


let user1={
    name:'Park',
    age: 24,
    address: "Russia",
    sayHi(){
        console.log("Alo?")
    }
 }
 console.log( user1.name)
console.log(user1['name'])
console.log(user1.age)
console.log(user1['age'])
console.log(user1.address)
console.log(user1['address'])
user1.sayHi()

//semicolon 다음 코드와 프로그램이 헷갈려할 때 확실하게 구분하기 위해 써도된다.

let user2={
    name: "Nomin",
    age:24,
    "Likes birds": true
}
console.log(user2)
 //alert(user2['Likes birds'])
//delete 삭제
delete user2['Likes birds'];
console.log(user2)
// 추가 
user2.isAdmin=true;
console.log(user2)

//const 코드 내에서 변경하지 않을 떄 선언
const user4={
    name:'John'
};
console.log(user4.name)
user4.name="Peter"
console.log(user4.name)
//const내의 변수값을 변경할 수 있다.

//value를 key로 사용하는 예
let key="isAdult"
let user5={
    name:"Smith",
    age:30,
};
console.log(user5)
user5[key]=true
console.log(user5)

//computed propirty-실핼 당시에 결정
// let user6={
//     name:'Peter',
//     age:20,
//     address:"Mongolia"
// }
// let what = prompt('사용자의 정보?', 'name');
// console.log(user6[what])

let fruits=prompt['어떤 과일을 구매?', 'apple'];
let bag={} //빈 객체 선언
bag[fruits]=5;
console.log(bag)

//아래의 2경우는 동일 단축표현식
//1
// function makeUser(name, age){
//     return {
//         name:name,
//         age:age,
//     }
// }
//2 더 찗은 표현식
function makeUserShorted(name, age){
    return {
        name,
        age,
    }
}
//makeUserShorted이랑 내용 똑같은 객체 하나 더 만들기 생성자
let user7= new makeUserShorted('김하나', '20');
let user8= new makeUserShorted('홍카게', '34');

