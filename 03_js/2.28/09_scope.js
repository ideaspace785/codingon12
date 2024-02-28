/**
 * scope(범위):{ } 로 표현된다.
 */
{
const msg="Hello";
console.log(msg);
}
// console.log(msg);

//var 는 함수 단위가 스코프가 된다.
function showAge(){
    var age=29;
    console.log(age);
}
showAge();
