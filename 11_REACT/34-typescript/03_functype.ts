// 물음표 붙은 선택적 변수는 맨 뒤에 와야한다. 
function print(a:number,b:number,c?:number ):void{
    console.log('print 함수 출력 결과')
    console.log(a)
    console.log(b)
    console.log(c)
}
print(1,2,3);
print(4,5) // var c 는 undefined

function print1(a:number,b:number,c=100):void{
    console.log('print1 함수 출력 결과')
    console.log(a)
    console.log(b)
    console.log(c)
}
print1(1,2,3);   // 1,2,3
print1(4,5) // 4,5 , undefined

//return 있는 경우
function sayHello():string{
    return 'HI~'
}
console.log(sayHello())

///실습1
function sum1(a:number,b:number){
    console.log(a+b)
}
sum1(5, 11);

///실습1
function sum2(...args:number[]){
    let sum=0;
    args.forEach((el)=>sum+=el)
    return sum
}
console.log(sum2(1,2,3,4, 10))

// 화샇표 함수
const squareArea=(x:number, y:number):number=>{
    return x*y;
}

// 화샇표 함수 return 생략
const squareArea2=(x:number, y:number):number=>x*y;
console.log(squareArea2(4,10))

//interface 정의시 함수 타입 표현
interface Greet{
    name: string,
    hi():string,
    bye(a:number): string
}
const codingon: Greet = {
    name: '철수',
    hi(){
        return '나는 '+ this.name + '다.';
    },
    bye(a:number){
        return `나는 작별 인사를 ${a}번 했습니다.`
    }

}
console.log(codingon.hi());
console.log(codingon.bye(3))


// {--------------Never----------------}
function goinOn():never{
    while(true){
        console.log('go!')
        //break 가 없다. 
    }
}