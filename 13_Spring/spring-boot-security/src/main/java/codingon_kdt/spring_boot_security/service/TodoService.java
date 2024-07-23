package codingon_kdt.spring_boot_security.service;

import codingon_kdt.spring_boot_security.domain.TodoEntity;
import codingon_kdt.spring_boot_security.repository.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
