package source_codes.chapter10.with_static;
class Article{
     static int count;
     static String category;

    private int num;
    private String title;
    private String regDate;
    public Article(int num, String title, String regDate) {
        this.num = num;
        this.title = title;
        this.regDate = regDate;
        count++;
    }
    public String toString() {
        return "Article [count=" + count
                + ", category=" + category
                + ", num=" + num
                + ", title=" + title
                + ", regDate=" + regDate + "]";
    }

}
public class Main {
    public static void main(String[] args) {
        Article.category = "공지사항";
        Article a1 = new Article(1, "첫번째 글제목", "20XX-01-01");
        Article a2 = new Article(2, "두번째 글제목", "20XX-01-02");
        Article a3 = new Article(3, "세번째 글제목", "20XX-01-03");

        System.out.println(a1.toString());
        System.out.println(a2.toString());
        System.out.println(a3.toString());
    }
}
