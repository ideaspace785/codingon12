package codingon.spring_boot_mybatis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/")
    public String redirectToUsers(){
        return "redirect:/users";
    }

    // GET /users 요펑 시 userlist.html 템플릿 뷰 반환
    @GetMapping("/users")
    public String listUsers(){
        return "userList";
    }
    // GET /users/new 요청 시 userForm.html 템플릿 뷰 반환
    @GetMapping("/users/new")
    public String newUserForm(){
        return "userForm";
    }

}
