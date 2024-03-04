/**실습. 13의 배수이자 홀수를 찾아보자
function oddMultiple(){
    for(let i=0; i<=10000; i++){
        if(i%13==0 && i%2==1){
            console.log(i);
       }
    }
}
oddMultiple();
//-------------------------------------------------*/
/**성적 구하는 프로그램 만들기
let mathScore=prompt("수학 점수를 입력하세요");
let engScore= prompt('영어 점수를 입력하세요');
let avg= (parseInt(mathScore)+parseInt(engScore))/2;
console.log(avg);
-------------------------------------------------*/
/**실습. 형변환 실습 
let mathScore="77";
let engScore="88";
let avgScore= (parseInt(mathScore)+parseInt(engScore))/2;
console.log(avgScore);
-------------------------------------------------*/
/**실습. Javascript 함수 실습(1) 
function multifly(x, y){
    return x*y;
}
console.log(multifly(3,7));
console.log(multifly(2,2));
-------------------------------------------------*/
/**실습. Javascript 함수 실습(2) 
function square(x){
    console.log(x*x);
}
square(4);
square(11);
square(5);
-------------------------------------------------*/
/**실습. if문 실습
 let age=25;
 if(age>=20){
    console.log("성인");
 }
 else if(age=>17 && age<20){
    console.log("고등학생");
 }
 else if(age=>14 && age<17){
    console.log("중학생")
 }
 else if(age=>8 && age<14){
    console.log("초등학생")
 }
else if(age=>0 && age<8){
    console.log("유아")
}
-------------------------------------------------*/
/**실습. 합계 구하기
let sum=0;
for(let i=0; i<101; i++){
    if(i%2==0 || i%5==0){
        sum+=i;
    }
 }
console.log(sum);
-------------------------------------------------*/







