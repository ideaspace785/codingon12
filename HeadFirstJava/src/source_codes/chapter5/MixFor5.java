package source_codes.chapter5;

public class MixFor5 {
    public static void main(String[] args) {
        int x = 0;
        int y = 30;
        for(int outer = 0; outer < 3; outer++) { // 0 -> 1
            for(int inner = 4; inner > 1; inner--) { //2까지  // 3까지
                x = x + 3; //6 -> 12
                y = y-2;  //26
                if(x == 6){
                    break;
                }
                x = x + 3; //9 -> 15
            }
            y = y - 2; //24 -> 22
        }
        System.out.println(x + " " + y);
    }
}
