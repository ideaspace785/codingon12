package codingon.mybatis_exer.service;

import codingon.mybatis_exer.domain.Post;
import codingon.mybatis_exer.dto.PostDTO;
import codingon.mybatis_exer.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostMapper postMapper;
    public List<PostDTO> getAllPosts() {
        List<Post> posts  = postMapper.findAllPosts();
        List<PostDTO> postDTOs = new ArrayList<>();
        for(Post post : posts){
            PostDTO postDTO = convertToDto(post);
            postDTOs.add(postDTO);
        }
        return postDTOs;
    }
    public List<PostDTO> findByWriter(String writer){
        Post post = postMapper.findByWriter(writer);
        List<PostDTO> postDTOs = new ArrayList<>();
        PostDTO postDTO = convertToDto(post);
        postDTOs.add(postDTO);
        return postDTOs;
    }
    public PostDTO getPostById(int id) {
        Post post = postMapper.findById(id);
        return convertToDto(post);
    }
    public void createPost(PostDTO postDTO){
        Post post = convertToEntity(postDTO);
        postMapper.createPost(post);
    }
    public void updatePost(PostDTO postDTO){
        Post post = convertToEntity(postDTO);
        postMapper.updatePost(post);
    }
    public void deletePost(int id){
        postMapper.deletePost(id);
    }

    public PostDTO convertToDto(Post post) {
        PostDTO postDTO = new PostDTO();
        postDTO.setId(post.getId());
        postDTO.setTitle(post.getTitle());
        postDTO.setContent(post.getContent());
        postDTO.setWriter(post.getWriter());
        postDTO.setPublisher("코딩온");
        return postDTO;
    }
    public Post convertToEntity(PostDTO postDTO) {
        Post post = new Post();
        post.setId(postDTO.getId());
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        post.setWriter(postDTO.getWriter());
        return post;
    }


}
