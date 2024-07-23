package codingon_kdt.spring_boot_security.dto;

import codingon_kdt.spring_boot_security.domain.TodoEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data  // @Getter + @Setter + @RequiredConstructor, @ToString, @EqualsAndHashCode 둘 다 있는 어노테이션
public class TodoDTO {
    private Long id;
    private String title;   // 할일
    private boolean done;   // 완료 여부

    public TodoDTO(final TodoEntity entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.done = entity.isDone();
    }

    public static final TodoEntity toEntity (final TodoDTO dto){
        return TodoEntity.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .done(dto.isDone())
                .build();
    }
}
