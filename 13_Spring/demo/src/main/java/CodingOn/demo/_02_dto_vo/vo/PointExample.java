package CodingOn.demo._02_dto_vo.vo;

public class PointExample {
    public static void main(String[] args) {
        Point p1 = new Point(0,0);
        Point p2 = new Point(3,4);

        System.out.println("p1 = " + p1);
        System.out.println("p2 = " + p2);
        System.out.println("Distance between p1 and p2 = " + p1.distance(p2));

        Point p3 = new Point(3,4);
        Point p4 = new Point(4,4);
        System.out.println("Are p2 and p3 the same point ? = " + p2.equals(p3));
        System.out.println("Are p2 and p4 the same point ? = " + p2.equals(p4));

        System.out.println("Hash code of p1 = " + p1.hashCode());
        System.out.println("Hash code of p2 = " + p2.hashCode());
        System.out.println("Hash code of p3 = " + p3.hashCode());
        System.out.println("Hash code of p4 = " + p4.hashCode());
    }
}
