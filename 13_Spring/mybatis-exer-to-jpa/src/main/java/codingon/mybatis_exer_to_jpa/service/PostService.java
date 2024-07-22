package codingon.mybatis_exer_to_jpa.service;

import codingon.mybatis_exer_to_jpa.domain.Post;
import codingon.mybatis_exer_to_jpa.dto.PostDTO;
import codingon.mybatis_exer_to_jpa.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;
    public List<PostDTO> getAllPosts() {
        List<Post> posts  = postRepository.findAll();
        List<PostDTO> postDTOs = new ArrayList<>();
        for(Post post : posts){
            PostDTO postDTO = convertToDto(post);
            postDTOs.add(postDTO);
        }
        return postDTOs;
    }
    public List<PostDTO> findByWriter(String writer){
        List<Post> post = postRepository.findPostByWriter(writer);
        List<PostDTO> postDTOs = new ArrayList<>();
        for(Post post1 : post){
            PostDTO postDTO = convertToDto(post1);
            postDTOs.add(postDTO);
        }
        return postDTOs;
    }
    public PostDTO getPostById(int id) {
        Post post = postRepository.findPostById(id);
        return convertToDto(post);
    }
    public void createPost(PostDTO postDTO){
        Post post = convertToEntity(postDTO);
        postRepository.save(post);
    }
    public void updatePost(int id, PostDTO postDTO){
        Post post = convertToEntityWithId(id, postDTO);
        postRepository.save(post);
    }
    public void deletePost(int id){postRepository.deleteById(id);}
/////////////////////////////////////////////////////////////
    public List<PostDTO> searchPosts(String keyword){
        List<Post> posts = postRepository.findByTitleContainingOrWriter(keyword);
        List<PostDTO> postDTOs = new ArrayList<>();
        for(Post post : posts){
            PostDTO postDTO = convertToDto(post);
            postDTOs.add(postDTO);
        }
        return postDTOs;
    }
    public Post convertToEntityWithId(int id, PostDTO dto){
        return Post.builder()
                .id(id)
                .title(dto.getTitle())
                .content(dto.getContent())
                .writer(dto.getWriter())
                .build();
    }

    public PostDTO convertToDto(Post post) {
        return PostDTO.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .writer(post.getWriter())
                .build();
    }
    public Post convertToEntity(PostDTO dto) {
        return Post.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .writer(dto.getWriter())
                .build();
    }
}
