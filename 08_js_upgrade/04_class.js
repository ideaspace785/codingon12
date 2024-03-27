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
apart.getAge();
apart.getWindow();
