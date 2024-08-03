
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String [] args){
        Monster[] ma= new Monster[3];
        ma[0] = new Vampire();
        ma[1] = new Dragon();
        ma[2] = new Monster();
        for(int i=0; i<3; i++){
            ma[i].frighten(i);
        }
    }

   static class Monster{
        boolean frighten(int z){
            System.out.println("arrrgh");
            return true;
        }
    }
    static class Vampire extends Monster {
        boolean frighten(byte b) {
            System.out.println("a bite?");
            return false;
            // 기준의 frighten 클래스가 아니기 때문에 상속받은 상위 크래스의 메소드가 호출됨
        }
    }
}
class Dragon extends Main.Monster {
    boolean frighten(int degree) {
        System.out.println("breath fire");
        return true;
    }
}