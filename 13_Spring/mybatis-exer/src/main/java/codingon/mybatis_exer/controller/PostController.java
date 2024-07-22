package codingon.mybatis_exer.controller;

import codingon.mybatis_exer.domain.Post;
import codingon.mybatis_exer.dto.PostDTO;
import codingon.mybatis_exer.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping
    public List<PostDTO> postList() {
        return postService.getAllPosts();
    }

    @GetMapping("/writer/{writer}")
    public List<PostDTO> getPostsByWriter(@PathVariable String writer) {
        return postService.findByWriter(writer);
    }
    @GetMapping("/{id}")
    public PostDTO getPostById(@PathVariable int id) {
        return postService.getPostById(id);
    }

    @PostMapping
    public PostDTO createPost(@RequestBody PostDTO postDTO) {
        postService.createPost(postDTO);
        return postDTO;
    }

    @PutMapping("/{id}")
    public PostDTO updatePost(@PathVariable int id, @RequestBody PostDTO postDTO) {
        postDTO.setId(id);
        postService.updatePost(postDTO);
        return postDTO;
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable int id) {
        postService.deletePost(id);
    }
}
