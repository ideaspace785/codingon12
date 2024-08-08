package source_codes.chapter10.without_static;

public class Article{
    int count;
    String category;
    
    private int num;
    private String title;
    private String regDate;

    public Article(int num, String title, String regDate){
        this.num = num;
        this.title = title;
        this.regDate = regDate;
        this.count  = 0;

    }

    @Override
    public String toString() {
        return "Article{" +
                "regDate='" + regDate + '\'' +
                ", title='" + title + '\'' +
                ", num=" + num +
                ", category='" + category + '\'' +
                ", count=" + count +
                '}';
    }
}
