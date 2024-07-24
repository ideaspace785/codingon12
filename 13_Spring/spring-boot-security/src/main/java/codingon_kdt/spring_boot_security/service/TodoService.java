package codingon_kdt.spring_boot_security.service;

import codingon_kdt.spring_boot_security.domain.TodoEntity;
import codingon_kdt.spring_boot_security.repository.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
// Simple Logging Facade for Java
// - 로그 라이브러리
// - 용도에 따라서 info, debug, warn, error 나눠서 로깅
// - 로깅 하고 싶은 클래스에해당 어노테이션을 작성하면 됨
public class TodoService {
    @Autowired  // 의존성 주입
    private TodoRepository repository;

    // create todo
    public List<TodoEntity> create(final TodoEntity entity) {
        validate(entity);   // 유효성 검사
        repository.save(entity);
        log.info("Entity id: {} is saved", entity.getId());   //print 처럼 뒤에 변수를 출력해준다 {}
        return repository.findByUserId(entity.getUserId());
    }

    // read todo
    public List<TodoEntity> retrieve(final String userId) {
        return repository.findByUserId(userId);

    }
// GPT 가 만든 update todo
//    public List<TodoEntity> update(final TodoEntity entity) {
//        validate(entity);
//
//        final Optional<TodoEntity> original = repository.findById(entity.getId());
//
//        if (original.isPresent()) {
//            final TodoEntity todo = original.get();
//            if (!todo.getUserId().equals(entity.getUserId())) {
//                log.warn("User ID mismatch. User: {}, Entity: {}", entity.getUserId(), todo.getUserId());
//                throw new RuntimeException("User ID mismatch");
//            }
//            todo.setTitle(entity.getTitle());
//            todo.setDone(entity.isDone());
//
//            repository.save(todo);
//            log.info("Entity id: {} is updated", todo.getId());
//        } else {
//            log.warn("Todo with id {} not found", entity.getId());
//            throw new RuntimeException("Todo not found");
//        }
//
//        return repository.findByUserId(entity.getUserId());
//    }

// GPT 가 만든 delete todo
//    public List<TodoEntity> delete(final TodoEntity entity) {
//        validate(entity);
//
//        final Optional<TodoEntity> original = repository.findById(entity.getId());
//
//        if (original.isPresent()) {
//            final TodoEntity todo = original.get();
//            if (!todo.getUserId().equals(entity.getUserId())) {
//                log.warn("User ID mismatch. User: {}, Entity: {}", entity.getUserId(), todo.getUserId());
//                throw new RuntimeException("User ID mismatch");
//            }
//
//            repository.delete(todo);
//            log.info("Entity id: {} is deleted", todo.getId());
//        } else {
//            log.warn("Todo with id {} not found", entity.getId());
//            throw new RuntimeException("Todo not found");
//        }
//
//        return repository.findByUserId(entity.getUserId());
//    }

    // update todo
    public List<TodoEntity> update(final TodoEntity entity) {
        // Optional 클래스: null 일수 있는 객체를 감싸는 래퍼 클래스(안전한 null 처리 가능)
        // isPresent() 메소드: Optional 한 객체기 값을 포함하는지를 확인 (값이 있으면 true, null 이면 false)
        Optional<TodoEntity> optionalTodo = repository.findById(entity.getId());
        if (optionalTodo.isPresent()) {
            TodoEntity todo = optionalTodo.get();
            todo.setTitle(entity.getTitle());
            todo.setDone(entity.isDone());
            repository.save(todo);
        }
        return retrieve(entity.getUserId());
    }
    // delete todo
    public List<TodoEntity> delete(final TodoEntity entity) {
        try{
            // 해당 id의 todo 항목 조회
            Optional<TodoEntity> optionalTodo = repository.findById(entity.getId());
            if (optionalTodo.isPresent()) {
                TodoEntity todo = optionalTodo.get();
                if(todo.getUserId().equals(entity.getUserId())){
                    repository.delete(entity);
                }else{
                    log.warn("Todo is not found with id: {}", entity.getId());
                    throw new RuntimeException("Todo not found");
                }
            }
        }catch(Exception e){
            log.error("Error deleting entity: {}", entity.getId(), e);
            throw new RuntimeException("Error deleting entity: " + entity.getId());
        }
        return retrieve(entity.getUserId());
    }

    private void validate(final TodoEntity entity) {
        if(entity == null){
            log.warn("Entity can not be null");
            throw new RuntimeException("Entity can not be null");
        }
        if(entity.getUserId() == null){
            log.warn("Unknown user");
            throw new RuntimeException("Unknown user");
        }
    }
}
