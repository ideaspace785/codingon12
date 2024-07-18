package codingon.spring_boot_mybatis.controller;


import codingon.spring_boot_mybatis.dto.UserDTO;
import codingon.spring_boot_mybatis.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController                     // 해당 클래스의 모든 메소드의 반환 값이 JSON 형식으로 반환되어 HTTP 응답 본문에 포함
@RequestMapping("/api/users")    // 해당 콘트롤러의 기본 경로 설정
public class UserController {

    // UserService
    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDTO> listUsers() {
        return userService.getAllUsers();
    }

}
