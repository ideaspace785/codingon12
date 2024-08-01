package exers.chapter3;
class Clock{
    String time;
    void setTime(String time){
        this.time = time;
    }
//    void getTime(){return time;} // 문제의 코드라인 . String 을 return 하면서  can not be void type method
    String getTime(){
        return time;
    }
}

class ClockTestDrive {
    public static void main(String[] args) {
        Clock clock = new Clock();
        clock.setTime("12:45");
        String today = clock.getTime();
        System.out.println(today);
    }
}
