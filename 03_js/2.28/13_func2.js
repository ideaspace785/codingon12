// function length

function foo(){
    console.log(foo.length);
}
foo(); //length=0
foo(1,2); //length=0, 매개변수

function bar(x){
    console.log(x);
}
function baz(x,y){
    console.log(x,y);
}
console.log(bar.length);
console.log(baz.length);

// console.log('return--------------------------------');
// function add(x,y){
//     console.log(`주어진 값들은  ${x}, ${y} 입니다`)
//     // console.log("더하면: ", x+y);
//     return x+y;
// }
// let result= add(1,2);
// console.log(result);

// console.log(add(3,4));

// let result2=function(){
// }
let result3=()=>{
    return x+y;
}
/**매개변수 표현식-------------------------------------*/
// ()=>{code} 매개변수 없을 때
// 매개변수가 x 일 때  x => {code}
//(x,y)=>{code}



