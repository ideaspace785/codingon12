// 한줄자리 ?주석
/**여러줄 주석 처리
 */
/**
 * console, 브라우저의 콘솔창에 출력
 */
console.log("Nomin");
console.log(console);

// 시간 계산
console.time('label');
console.timeEnd('label');

// String substitution - 문자 대용
console.log("This is a %s" , "Nomin");
console.log("이것은 숫자 %i입니다.", 32);
console.log("%c This is Large red text", "color:red; font-size:30px" );
console.table({name: "Kim", email: "kim@spreatics.com"})

function division(x,y){
    if(y<0){
        console.warn("y는 1보다 커야합니다");
    }
    return x-y;
}
division(2,-1);