package exers.chapter1;

// C
public class Exercise3b {
    public static void main(String[] args) { //추가한 코드 라인
        // 메인 메소드가 없었기 때문에 컴파일 불가
        int x = 5;
        while(x > 1){
            x = x - 1;
            if(x < 3){
                System.out.println("small x");
            }
        }
    }
}
