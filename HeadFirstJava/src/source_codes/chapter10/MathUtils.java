package source_codes.chapter10;

public class MathUtils {
    // private 생성자: 인스턴스화 방지
    private MathUtils() {
        throw new UnsupportedOperationException("Utility class");
    }

    // 정적 메서드들
    public static int add(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }

    public static int multiply(int a, int b) {
        return a * b;
    }
    public static double divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Division by zero");
        }
        return (double) a / b;
    }
}


