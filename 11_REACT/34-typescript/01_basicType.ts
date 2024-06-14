// TypeScript

// 명시적으로 
let a: number =1;
a= 2;

let b: string = 'str';
let c: boolean = true;

let ee= null; // type 는 "any"

// Array
let number:number[]=[1,2,3,4,5];
let strArray : string[] = ['apple', 'banana','kiwi'];
let strArray2 : Array<string> = ['apple2', 'banana2','kiwi2'];

//베열의 원소가 여러타입의 경우:
let arr1 : (string | number | boolean)[]=[1, true, 'string']

//배열 안에 배열, boolean , null, number, array  등등 원소가 될수 있음
let arr2 : Array<boolean | null | number[] >= [true, null, [1,2,3]];

//object
let obj: object={
    name:'codingon',
    grade:1 
};




