package exers.chapter8;

public class GC {
    public static GC doStuff(){
        GC newGC = new GC();
        doStuff2(newGC);
        return newGC;
    }
    public static void main(String[] args) {
        GC  gc1; // reference 를 하나 선언해주고
        GC gc2 = new GC();
        GC gc3 = new GC();
        GC gc4 = gc3; // 이제 gc3, gc4는 같은 객체를 가리키는 두개의 레퍼런스 변수가 된것이다.

        // gc1가 soStuff를 호출할 수 있는 이유:
        // gc1이 어떤 객체도 참조하지 않고 있음에도 불구하고 메서드를 호출하고 있음
        // 1. 클래스 메서드(정적 메서드): static method는 객체의 인스턴스에 속하지 않고, 클래스 자체에 속한다.
        //    따라서 객체 없이도 호출 가능
        // 2. 객체 인스턴스과 무관: 이 메서드는 정적 메서드이기 때문에 객체 인스턴스를 통해서가 아닌 클래스 이름을 통해 직접 호출 가능
        //    클래스 이름을 사용하여 직접 호투하는 것이 더 명확하고 오류를 줄일 수 있다.
//        GC.doStuff();
        // 3. 메서드 호출 시점: 자바는 gc1 참조를 사용하지 않고 , 클래스 GC 의 정적 메소드를 직접 호출한다.

        gc1 = doStuff(); // returned newGC 가 들어감
        // TODO
        // 연습 문제
        // 딱 하나의 객체가 가비지 컬렉션이 되도록 만들기
        //0-------------------------------------------------
        // 1. copyGC = null; // 영역 밖의 변수에 접근하려 한다. 불가능
        // 2. gc2는 하나의 객체만을 참조하고 있기 떄문 가능
        // gc2 = null;
        // 3. newGC = gc3;   // 영역 밖의 변수에 접근하려 한다. 불가능
        // 4. gc1= null; doStuff()에서만 만들어진 객체 사라짐, doStuff2()의 객체는 그대로 있음 , 가능
        // 5. newGC = null;  // 영역 밖의 변수에 접근하려 한다. 불가능
        // 6. gc4 = null; 얘가 널이 된다고 객체가 가비지 컬렉션 대상이 되지 않는다. , 불가능
        // 7. gc3 = gc2;  얘가 gc2가 된다고 객체가 가비지 컬렉션 대상이 되지 않는다. gc4가 참조하고 있다 , 불가능
        // 8. gc1 = gc4; 그 객체 대한 유일한 레퍼런스를 대입함, 가능
        // 9, gc3= null;  // gc4 가 여전히 참조하고 있죠 , 불가능








    }
    public static void doStuff2(GC copyGC){
        GC localGC =  copyGC; // returned newGC 와 동일한 객체를 가리키고 있음.
    }
}

