package codingon.mybatis_exer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String publisher="CodingOn";
//    private String registered; 를 클라이언트들에게 노출시키지 않는다!
}
