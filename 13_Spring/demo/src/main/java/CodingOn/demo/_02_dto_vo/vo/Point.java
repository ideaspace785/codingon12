package CodingOn.demo._02_dto_vo.vo;

import java.util.Objects;

// final class: final class 는 상속 불가능 -> 불변성 보장
public final class Point {
    // final field: 한번 초기화 되면 변경 불가능
    private final int x;
    private final int y;

    // constructor
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    // getter ( setter 가 없으므로 불변성 유지 가능)
    public int getX() {
        return x;
    }
    public int getY() {
        return y;
    }
    // 비즈니스 로직: 두 점 사이의 거리 계산
    public double distance(Point p) {
        int  dx = this.x - p.x;
        int  dy = this.y - p.y;
        return Math.sqrt(dx*dx + dy*dy);  // Math.sqrt(): 제곱근 메소드
    }

    @Override
    public boolean equals(Object o) {
        // this 현재 객체와 비교 대상 객체 (매개변수 o)기 같은 참조를 가르킨다면 true
        if (this == o) return true;

        // 비교 대상 객체가 null 이거나, 현재 객체와 다른 클래스의 인스턴스라면 false
        if (o == null || getClass() != o.getClass()) return false;

        // 비교 대상 객체를 Point 타입으로 형변환
        Point point = (Point) o;

        // 두 Point 객체의 x,y 값이 같은지 확인하고 결과 boolean 반환
        return x == point.x && y == point.y;
    }

    @Override
    // Object
    public int hashCode() {
        return Objects.hash(x, y);
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }
}
