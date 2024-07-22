package codingon.mybatis_exer_to_jpa.dto;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
}
