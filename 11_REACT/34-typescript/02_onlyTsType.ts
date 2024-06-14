//고정적인 배열  only typescript type

// {--------------Tuple----------------}
let drink:[string,string]=['cider', 'lotte'] //길이와 타입이 고정
drink[0]='everland';
drink.push('에휴'); //tuple 한계
console.log(drink)

let olimpic_newgame: readonly [object[], boolean]=[[{
    name:'쇼트트랙',
    type:' 혼성 계주'
}],
true,
];
// olimpic_newgame[1]=false;
console.log(olimpic_newgame[0])


//readonly
let drink1: readonly [string, number]=['cider', 2000];
// drink1.push("에휴") 이기 때문에 error


//type definition
type productInfo=[number, string, number]; 
let product1: productInfo=[1,'logitech', 1200];


// {--------------Enum----------------}
enum Auth{
    admin=0,
    user=1,
    guest=2,
}
enum Cafe{
    americano='아메리카노',
    latte= '라떼'
}
console.log(Auth.admin);
console.log(Cafe.americano)
//값을 안넣어주면 기본 값이 0부터 1,2 로 들어간다

// {--------------Any----------------}
//any can takes any type
let  val:any;
val=true;
val=2;
val='string';


// {--------------Interface----------------}
interface Student{
    name:string;
    isPassed:boolean;
}
const student1: Student ={
    name:'codingon',
    isPassed:true,
    // add:'string' 없는 값을 추가하면 에러~~~~~~~~~
}


// {--------------Type----------------}
type Score= 'A+' | 'A' | 'A-';
let score1:Score= 'A+';
let score2:Score= 'A';
// let score3:Score= 'B'; 지정하지 않은 값 에러~~~~~~


// Type Vs Enum(승) 의미가 더 있는 애한테 이놈!
enum Score3{
    a=100,
    b=90,
    c=80,
}

// Interface 상속 
interface BaseballClub extends Student{
    position: string,
    height:number;
    backNumber?: number; //물음표는 backNumber 원소가 없어도, 있어도 된다라는 뜻, ? 없으면 필수 정보가 된다. 
    [grade:number]:Score3;
}
const player1: BaseballClub={
    name:'otani',
    isPassed:true,
    position:'pitcher',
    height:190,
    backNumber:17,
    1 :Score3.a

}

//교차 타입: 두개 이상의 타입을 합치는 것
interface Toy{
    name:string,
    start():void;
}
interface Car{
    name:string,
    color:string,
    price:number,
}

type ToyCar= Toy & Car;
const toyCar: ToyCar = {
    name:'tayo',
    start(){
        console.log('출발');
    },
    color:'blue',
    price:90000,
}



//Interface Exer
interface Game{
    title:string,
    price:number,
    desc?:string,
    category:string,
    platform:string
}
let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
  }
  
  let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
  }



