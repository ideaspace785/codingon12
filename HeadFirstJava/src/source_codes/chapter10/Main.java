package source_codes.chapter10;

public class Main {
    public static void main(String[] args) {
        // MathUtils 클래스의 정적 메서드 호출
        int sum = MathUtils.add(5, 3);
        int difference = MathUtils.subtract(5, 3);
        int product = MathUtils.multiply(5, 3);
        double quotient = MathUtils.divide(5, 3);

        System.out.println("Sum: " + sum);             // 출력: Sum: 8
        System.out.println("Difference: " + difference); // 출력: Difference: 2
        System.out.println("Product: " + product);       // 출력: Product: 15
        System.out.println("Quotient: " + quotient);     // 출력: Quotient: 1.6666666666666667

        // 다음 코드는 컴파일 에러를 발생시킵니다.
        // MathUtils utils = new MathUtils();
    }
}
