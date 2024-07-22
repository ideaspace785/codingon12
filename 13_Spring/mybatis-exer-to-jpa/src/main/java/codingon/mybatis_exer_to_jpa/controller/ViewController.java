package codingon.mybatis_exer_to_jpa.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/")
    public String index() {
        return "redirect:/posts";
    }
    @GetMapping("/posts")
    public String postList() {
        return "postList";
    }

    @GetMapping("/posts/new")
    public String newPostForm() {
        return "postForm";
    }

    @GetMapping("/posts/{id}/edit")
    public String editUserForm() {
        return "postForm";
    }
}
