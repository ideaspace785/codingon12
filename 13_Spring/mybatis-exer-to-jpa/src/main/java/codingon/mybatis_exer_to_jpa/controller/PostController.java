package codingon.mybatis_exer_to_jpa.controller;

import codingon.mybatis_exer_to_jpa.dto.PostDTO;
import codingon.mybatis_exer_to_jpa.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    // PostService 의존성 주입
    @Autowired
    private PostService postService;

    // 모든 게시글 조회
    @GetMapping
    public List<PostDTO> postList() {
        return postService.getAllPosts();
    }

    // 아이디로 게시글 가져오기
    @GetMapping("/{id}")
    public PostDTO getPostById(@PathVariable int id) {
        return postService.getPostById(id);
    }

    // 게시글 작성
    @PostMapping
    public PostDTO createPost(@RequestBody PostDTO postDTO) {
        postService.createPost(postDTO);
        return postDTO;
    }

    // 게시글 수정
    @PutMapping("/{id}")
    public PostDTO updatePost(@PathVariable int id, @RequestBody PostDTO postDTO) {
        postService.updatePost(id,postDTO);
        return postDTO;
    }

    // 게시글 삭제
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable int id) {
        postService.deletePost(id);
    }

    // 작성자 이름으로 n 개의 게시물 조회
    @GetMapping("/writer/{writer}")
    public List<PostDTO> findPostByWriter(@PathVariable String writer) {
        return postService.findByWriter(writer);
    }

    @GetMapping("/searchByTitleOrWriter/{keyword}")
    public List<PostDTO> findByTitleContainingOrWriter(@PathVariable String keyword) {
        return postService.searchPosts(keyword);
    }


}
