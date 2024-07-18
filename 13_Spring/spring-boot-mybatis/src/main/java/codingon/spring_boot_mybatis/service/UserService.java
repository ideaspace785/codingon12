package codingon.spring_boot_mybatis.service;

import codingon.spring_boot_mybatis.domain.User;
import codingon.spring_boot_mybatis.dto.UserDTO;
import codingon.spring_boot_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service    // 이 클래스가 서비스 계층의 컴포넌트임을 나타냄
public class UserService {
    // UserMapper interface 의 구현페를 자동으로 주입 받음
    @Autowired
    private UserMapper userMapper;

    // 모든 사용자의 정보를 UserDTO 리스트로 반환
    public List<UserDTO> getAllUsers() {
        List<User> users = userMapper.findAll();    // 모든 유저 도메인 객체 가져옴
        List<UserDTO> userDTOs = new ArrayList<>(); // 새로운 DTO 객체 리스트 생성
        for (User user : users) {
            UserDTO userDTO = convertToDto(user);   // domain to DTO
            userDTOs.add(userDTO);                  // DTO 를 리스트에 추가
        }
        return userDTOs;
    }

    private UserDTO convertToDto(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setNo((int)(user.getId()+100));

        return dto;
    }
}
