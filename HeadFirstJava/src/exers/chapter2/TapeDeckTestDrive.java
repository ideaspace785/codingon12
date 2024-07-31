package exers.chapter2;

/*
     페이지 76
     연습 문제 A
    컴파일러가 되어 봅시다
 */
class TapeDeck {
    boolean canRecord;
    void playTape(){
        System.out.println("tape playing");
    }
    void recordTape(){
        System.out.println("tape recording");
    }
}
class TapeDeckTestDrive {
    public static void main(String[] args) {
        TapeDeck t = new TapeDeck(); // 추가한 코드 라인
        // 책체를 만들고 t 라는 객체  변수에다 저장해주기
        t.canRecord = true;
        t.playTape();
        if(t.canRecord){
            t.recordTape();
        }
    }
}
