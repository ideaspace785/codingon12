/**매개변수 갖는 함수 */

function greeting(surname, lastname='길동'){
    console.log(`Welcome ${surname} ${lastname} 님`)
}
greeting('존')
greeting('Kim', 'Glory')





// function sum(a,b){
//     return a+b
// }
// let result=sum(1,2);
// console.log(`첫번째 결과는 ${result}`) //3

// let result1=sum(1,2,3,4);
// console.log(`두번째 결과는 ${result}`) //3


function sum(){
    let total=0;
    for(i of arguments)
        total += i;
    return total;
}
console.log(sum(1,2,3,4));


// rest operation rest는 마지막에 위치

function addAll(a,b,...xxx){
    console.log(a,b)
    console.log(xxx)
}
addAll(1,2,3,4,5,6)