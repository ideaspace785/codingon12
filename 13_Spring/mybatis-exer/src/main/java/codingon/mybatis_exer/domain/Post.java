package codingon.mybatis_exer.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Post {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
}
