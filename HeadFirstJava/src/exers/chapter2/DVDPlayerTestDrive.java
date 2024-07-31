package exers.chapter2;
/*
     페이지 76
     연습 문제 B
    컴파일러가 되어 봅시다
 */

class DVDPlayer{
    boolean canRecord = false;
    void recordDVD(){
        System.out.println("DVD Recording");
    }
    // 추가한 코드
    void playDVD(){
        System.out.println("DVD Playing");
    }
}
class DVDPlayerTestDrive {
    public static void main(String[] args) {
        DVDPlayer dvd = new DVDPlayer();
        dvd.canRecord = true;
        dvd.playDVD(); // 클래스에 없는 메소드를 호출하고 있기 때문에 메소드를 만들어주거나, 이 코드를 삭제하면 된다.
        if(dvd.canRecord){
            dvd.recordDVD();
        }
    }
}
