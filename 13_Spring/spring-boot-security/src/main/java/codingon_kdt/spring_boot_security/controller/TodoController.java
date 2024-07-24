package codingon_kdt.spring_boot_security.controller;

import codingon_kdt.spring_boot_security.domain.TodoEntity;
import codingon_kdt.spring_boot_security.dto.ResponseDTO;
import codingon_kdt.spring_boot_security.dto.TodoDTO;
import codingon_kdt.spring_boot_security.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("todo")
public class TodoController {
    @Autowired
    private TodoService service;

    // 참고. ResponseEntity 란?
    // - 해당 객체를 이용해 상태 코드, 응답 본문 등을 설정해서 클라이언트에게 "응답"
    // 메서드
    // - ok(): 성공 (200 status code)
    // - headers(): 응답 헤더 설정
    // - body(): 응답 본문 설정

    // @AuthenticationPrincipal 어노테이션
    // - 현재 인증된 사용자 정보에 접근할 수 있게 함
    // - Spring Security 는 Security Context 에서 현재 사용자의 principal 을 가져옴
    // - 현재 우리 코드의 경우 JwtAuthenticationFilter 클래스에서 userID를 바탕으로 인증 객체를 생성했음

    // todo 를 생성하기
    @PostMapping
    public ResponseEntity<?> createTodo(@AuthenticationPrincipal String userId, @RequestBody TodoDTO dto) {
        // 임시 아이디
//        String temporaryUserId = "temporary-user";
        try {
            // (1)
            TodoEntity entity = TodoDTO.toEntity(dto);

            // (2) 생성 당시 id 는 null 로 초기화
            entity.setId(null);

            // (3) 임시 사용자 아이디 설정
//            entity.setUserId(temporaryUserId);
            entity.setUserId(userId);

            // (4)
            List<TodoEntity> entities = service.create(entity);

            // (5) 리턴된 엔티티 리스트를 TodoDTO 리스트로 변환
            return getResponseEntity(entities);
        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }
    @GetMapping
    public ResponseEntity<?> retrieveTodoList(@AuthenticationPrincipal String userId) {
        // 임시 유저 (삭제 예정)
        //String temporaryUserId = "temporary-user";

        // (1) 서비스 메서드의 retrieve() 사용해 투두 리스트 가져오기
        List<TodoEntity> entities = service.retrieve(userId);

        // (2) 리턴된 엔티티 리스트를 TodoDTO 리스트로 변환
        return getResponseEntity(entities);
    }
    /*
    @PutMapping("/{id}")
    public ResponseEntity<?> updateTodo(@AuthenticationPrincipal String userId, @PathVariable("id") Long id, @RequestBody TodoDTO dto) {
        try {
            TodoEntity entity = TodoDTO.toEntity(dto);
            entity.setUserId(userId);
            entity.setId(id);

            List<TodoEntity> entities = service.update(entity);
            List<TodoDTO> dtos = new ArrayList<>();
            for (TodoEntity tEntity : entities) {
                TodoDTO tDTO = new TodoDTO(tEntity);
                dtos.add(tDTO);
            }
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@AuthenticationPrincipal String userId, @PathVariable("id") Long id) {
        try {
            TodoEntity entity = new TodoEntity();
            entity.setUserId(userId);
            entity.setId(id);

            List<TodoEntity> entities = service.delete(entity);
            List<TodoDTO> dtos = new ArrayList<>();
            for (TodoEntity tEntity : entities) {
                TodoDTO tDTO = new TodoDTO(tEntity);
                dtos.add(tDTO);
            }
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }

     */
    @PutMapping
    public ResponseEntity<?> updateTodo(@AuthenticationPrincipal String userId, @RequestBody TodoDTO dto) {
        try{
            TodoEntity entity = TodoDTO.toEntity(dto);
            entity.setUserId(userId);
            // 서비스 계층을 통해서 엔티티 업데이트
            List<TodoEntity> entities = service.update(entity);
            return getResponseEntity(entities);
        }catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder()
                    .error(error)
                    .build();
            return ResponseEntity.badRequest().body(response);
        }
    }
    @DeleteMapping
    public ResponseEntity<?> deleteTodo(@AuthenticationPrincipal String userId, @RequestBody TodoDTO dto) {
        try{
            TodoEntity entity = TodoDTO.toEntity(dto);
            entity.setUserId(userId);
            // 서비스 계층을 통해서 엔티티 삭제
            List<TodoEntity> entities = service.delete(entity);
            return getResponseEntity(entities);
        }catch(Exception e) {
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder()
                    .error(error)
                    .build();
            return ResponseEntity.badRequest().body(response);
        }
    }

    private ResponseEntity<?> getResponseEntity(List<TodoEntity> entities) {
        List<TodoDTO> dtos = new ArrayList<>();
        for (TodoEntity updatedEntity: entities) {
            TodoDTO updatedDTO = new TodoDTO(updatedEntity);
            dtos.add(updatedDTO);
        }
        ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder()
                .data(dtos)
                .build();
        return ResponseEntity.ok().body(response);
    }
}
