package exers.chapter1;

// B
public class Exercise2b { // 추가한 코드 라인
    // 클래스의 정의 부분이 없었으므로 컴파일이 안됬다.

    public static void main(String[] args) {
        int x = 5;
        while (x > 1){
            x = x - 1;
            if(x < 3){
                System.out.println("small x: " + x); // 2 ,1
            }
        }
    }
    // 결론:컴파일 시 에러는 안나지만 로직 상 이상하다.
}
