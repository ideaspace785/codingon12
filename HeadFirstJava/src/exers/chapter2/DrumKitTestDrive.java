package exers.chapter2;
/*
     페이지 77
     연습 문제
    코드 좌석
 */

class DrumKit {
    boolean topHat = true;
    boolean snare = true;
    void playSnare(){
        System.out.println("bang bang ba-bang");
    }
    void playTopHat(){
        System.out.println("ding ding da-ding");
    }
}
class DrumKitTestDrive {
    public static void main(String[] args) {
        DrumKit d = new DrumKit();
        d.snare = false;
        d.snare= true;
        if(d.snare == true){
            d.playSnare();
        }
        d.playSnare();
    }
}
