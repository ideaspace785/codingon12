//1. Declare Class
class House{
    constructor(year,name, windows){
        this.year=year;
        this.name=name;
        this.windows=windows;
    }
    getAge(){
        console.log(`${this.name} 은/는 건축한지 ${this.year}년입니다.`)
    }
    getWindow(){
        console.log(` 창문의 개수는 ${this.windows}개입니다 .`)
    }
}
const apart= new House(2008, "래미안", 10);
console.log(apart.name)
apart.getAge();
apart.getWindow();



//상속 
//부모로부터 extends를 사용

class Apartments extends House{
    //부모부터 상속 받고 가져다가 쓸 때는 parametr에 적어줘야 한다.

    constructor(year, name, windows,floor){
        super(year, name, windows);
        this.floor=floor;
    }
    getFloor(){
        console.log(`${this.name} 은/는 ${this.year}년도에 건촉했습니다. ${this.windows}개의 창문 있고, ${this.floor}층입니다`);
    }

}
const apartNew= new Apartments(2024, "래미안UltrA", 10 , 100);
apartNew.getFloor();


//Overriding
//부모의 매소드를 새로 정의하면 override
//새로 정의를 안하고 쓰면 super.method(); 
class Shape{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
    area(){
        console.log(this.width*this.height)
    }
    move(){
        console.log('move')
    }
}
const c= new Shape(3,4);
c.area();

class Circle extends Shape{
    move(){
        console.log('move>circle');
    }
}
const d= new Circle();
d.move();
