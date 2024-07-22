package codingon.mybatis_exer_to_jpa.repository;

import codingon.mybatis_exer_to_jpa.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    // 1. 글 작성자 이름으로 n 개의 게시글 조회
    @Query("SELECT p FROM Post p WHERE p.writer = :writer")
    List<Post> findPostByWriter(@Param("writer") String writer);

    // 2. 글 아이디로 n 개의 게시글 조회
    @Query("SELECT p FROM Post p WHERE p.id = :id")
    Post findPostById(@Param("id") int id);

    // 3. 검색어를 보낼 때 작성자 이름/제목에 특정 문자열이 포함된 모든 게시글 n 개 찾기
    @Query("SELECT p From Post p WHERE p.writer LIKE %:keyword% OR p.title LIKE %:keyword%")
    List<Post> findByTitleContainingOrWriter(@Param("keyword") String keyword);
}
