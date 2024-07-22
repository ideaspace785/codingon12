package codingon.mybatis_exer.mapper;


import codingon.mybatis_exer.domain.Post;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostMapper {
    List<Post> findAllPosts();  // R - 모든 게시글 조회
    Post findByWriter(String writer);  // R - 특정 작성자의 게시글 조회
    Post findById(int id);
    void createPost(Post post);   // C - 게시글 작성
    void updatePost(Post post);  // U - 게시글 수정
    void deletePost(int id);  // D - 게시글 삭제

}
