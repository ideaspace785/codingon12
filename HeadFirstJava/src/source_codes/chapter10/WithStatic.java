package source_codes.chapter10;

import static java.lang.System.out;
import static java.lang.Math.*;

public class WithStatic {
    public static void main(String[] args) {
        out.println("sqrt: " + sqrt(5));
        out.println("tan: " + tan(60));
        Test test = new Test();
        test.print();
    }
}
class Test{
    void print() {
        out.println("print");
    }
}
