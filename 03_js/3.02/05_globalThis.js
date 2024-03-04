var red='red'; //전역
let blue='blue'; //범위 안에서만

sayHi();
function sayHi(){
    console.log("Hi~~~~~~~~~~~~~~")
}
sayHi();

//(Hoisting)호이스팅은 "var function"은 실행할 때 호이스팅이 된다. 
//이런 것들은 코드에 맨처음으로 위치를 바꿔서 실행함으로 함수같은 경우는 선언 하기 전에 실행할 수 있다.  