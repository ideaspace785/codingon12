package exers.chapter1;
// A
public class Exercise1b {
    public static void main(String[] args) {
        int x = 1;
        while (x < 10){
            if(x > 3 ){
                System.out.println("Big x: " + x);
            }
            x++; // 추가한 코드
            // x 를 증가시켜주지 않으면 무한 루프에 빠지게 되어 while 문에에서 나오지 않습니다.
        }
    }
}
