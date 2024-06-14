//Generic
//선언할 때 타입을 지정하기 어려운 경우
// - 데이터의 타입을 외부에서 지정
// - 생성 시점에 타입을 명사 
// - 재사용성이 증가'
// - 타입을 변수처럼 사용
// <T> 형태로 주로 사용

function numArrLen(arr:number[]):number{
    return arr.length
}
function strArrLen(arr:string[]):number{
    return arr.length
}

// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만든다
// -> type 만 올수 있음
function arrLen<T>(arr:T[]):number{
    return arr.length
}
console.log(arrLen<number>([1,2,3,4]));
console.log(arrLen<string>(['a','b']))

console.log(arrLen<string | number>(['옒',4]));

function printSome<T>(x:T, y:T){
    console.log(x,y)
}
printSome<string>('hi', 'hello');
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [false, false])

function printSome2<T, U>(x:T, y:U){
    console.log(x,y)
}
printSome2(100, '원')



// interface & generic
interface Phone<T>{
    company: string,
    createdAt: Date;
    option: T;
}
type iphoneOption={
    color:string,
    storage: number
};

const iphone15:Phone<iphoneOption>={
    company:'apple',
    createdAt: new Date(),
    option: {
        color:'white',
        storage:128,
    }
}
console.log(iphone15)

type samsungOption={
    color:string,
    isBuz: boolean
};

const galaxy:Phone<samsungOption>={
    company:'samsung',
    createdAt: new Date(),
    option: {
        color:'white',
        isBuz:true,
    }
}
console.log(galaxy)


function arrElement<T>(arr: T[], index: number): boolean | T {
    if (index >= arr.length) {
        return false;
    } else {
        return arr[index];
    }
}

console.log(arrElement(['a', 'b'], 1)); // b
console.log(arrElement(['a'], 1)); // false

