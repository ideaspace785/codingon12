package source_codes.chapter10.without_static;


// static 을 사용하지 않고 있는 예시
public class Main {
    public static void main(String[] args) {
        Article a1 = new Article(1, "첫번쩨 글제목", "2024-08-08");
        a1.category = "공지사항";
        a1.count++;
        System.out.println(a1.count);

        Article a2 = new Article(2, "두번째 글제목", "20XX-01-02");
        a2.category = "공지사항";
        a1.count++;
        a2.count = a1.count;
        System.out.println(a2.count);

        Article a3 = new Article(3, "세번째 글제목", "20XX-01-03");
        a3.category = "공지사항";
        a1.count++;
        a2.count++;
        a3.count = a2.count;
        System.out.println(a3.count);

        System.out.println(a1.toString());
        System.out.println(a2.toString());
        System.out.println(a3.toString());

    }
}
