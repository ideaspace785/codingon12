package source_codes.chapter10;

public class Duck {
    private static int size =11;
    public static void main(String[]args){
        // 원래 코드
        setSize(30);
        System.out.println("Size is " + getSize());
        // getSize() 메서드를 호출하면 size 인스턴스 변수를 쓰기 때문에 문제가 생긴다.
//        Duck duck = new Duck();
//        duck.size = 10;
//        System.out.println("Size is " +duck.getSize());
    }
    public static void setSize(int s){
        size = s;
    }
    public static int getSize(){
        return size;
    }
}
