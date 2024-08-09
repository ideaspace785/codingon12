package source_codes.chapter10.format;


// 숫다를 포매핑 할 때 세자리마다 쉼표 , 를 집어넣기

import java.util.Calendar;
import java.util.Date;

public class TestFormats {
    public static void main(String[] args) {
        String s = String.format("%,d", 100000000);
        System.out.println(s); //  100,000,000

        String s1 = String.format("%.2f", Math.PI);
        System.out.println(s1); // 3.14
        System.out.printf("I have %.3f bugs to fix.\n", Math.PI);
        // I have 3.142 bugs to fix.

        String s2 = String.format("I have %,.3f bugs to fix.", 4483957.75934626094);
        System.out.println(s2);
        // I have 4,483,957.759 bugs to fix.

        //Date Formatting
        // 1.날짜와 시간을 전부 표시할 때: %tc
        System.out.println(String.format("%tc", new Date()));
        // 2. 시간만 표시할 때
        System.out.println(String.format("%tr", new Date()));
        // 3. 요일, 월, 일을 표시할 때: %tA, %tB, %td
        Date today = new Date();
        System.out.println(String.format("%tA, %tB %td", today, today, today));
        // 위와 똑같지만 인자를 한번만 전달할 때:  %tA, %tB, %td
        Date today1 = new Date();
        System.out.println(String.format("%tA, %<tB %<td",today1));
//         < 왼쪽 꺽쇠 " < " 는 포매터한테 이전의 인자를 다시 써주세요 라고 말해주는 플래그이다.
//         이렇게 하면 같은 변수를 여러번 전달하지 않아도 된다.

        System.out.println("Calendar---------------------------------");
        // Calendar
        Calendar cal = Calendar.getInstance();
        cal.set(2020,Calendar.OCTOBER,30, 15,40);
        long day1 = cal.getTimeInMillis();
        day1 += 1000 * 60 *60;
        cal.setTimeInMillis(day1);
        System.out.println("new hour " + cal.get(cal.HOUR_OF_DAY));


    }
}
