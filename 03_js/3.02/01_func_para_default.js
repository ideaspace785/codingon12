function bank(deposit, rate, year){
    return deposit*rate/100*year
}
// console.log(bank(1000/3.5,5))


function bank2(deposit, rate=3, year=5){
    return deposit*rate /100*year
}
console.log(bank2(1000/3.5,5))
console.log(bank2(1000,))


function printAll(...args){
//     console.log(args);
//     for(let i=0; i< args.length; i++){
//         console.log(args[i])//i번째 index
//     }
// }
// printAll('html', 'css', 'js')
// printAll('html', 'css', 'js', 'java')

}
function printItems(...args){
    for(let i =0; i<args.length; i++){
        console.log(args[i])
    }
    for(const item of args){
        console.log(item)
    }
}
printItems('a', 'b', 'c');

//별 만들기
for(let i=1; i<6; i++){
    for(let j=0; j<i; j++){
       console.log("⭐") 
      
    } 
    console.log('\n')
}

for(let i=5; i>=1; i--){
    for(let j=0; j<i; j++){
       document.write("⭐") ;
    } 
    document.write('<br>');
}
/**
 * 자동 실행 함수 형식
 * 형식:() 
 */

// (function(){
//     console.log('자동 실행',)
// })()

//자동 실행 함수에 매개변수는 두번쨰 괄호에 넣는다. 
(function(a,b){
    console.log(a+b)
})(3,4)


