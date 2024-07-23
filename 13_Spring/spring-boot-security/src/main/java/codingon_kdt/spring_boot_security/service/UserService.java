package codingon_kdt.spring_boot_security.service;

import codingon_kdt.spring_boot_security.domain.UserEntity;
import codingon_kdt.spring_boot_security.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j

public class UserService {
    @Autowired
    private UserRepository userRepository;
    // 사용자 생성
    public UserEntity create(final UserEntity userEntity) {
        // 유효성 검사 1)UserEntity 혹은 email이 null 인 경우 예외를 던짐
        if(userEntity ==  null || userEntity.getEmail() == null){
            throw new RuntimeException("Invalid arguments");
        }
        // 유효성 검사 2)이메일이 이미 존재하는 경우 예외를 던짐
        final String email = userEntity.getEmail();
        if(userRepository.existsByEmail(email)){
            log.warn("Email already exists {}", email);
            throw new RuntimeException("Email already exists");

        }
        return userRepository.save(userEntity); // UserEntity 를 DB 에 저장
    }
    // 이메일과 비밀번호로 사용자 조회
    public UserEntity getByCredentials(final String email, final String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}
