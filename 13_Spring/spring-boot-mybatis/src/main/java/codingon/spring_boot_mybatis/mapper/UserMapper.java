package codingon.spring_boot_mybatis.mapper;

import codingon.spring_boot_mybatis.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper // 해당 인터페이스가 Mybatis mapper 임을 나타냄
public interface UserMapper {
    // case1. 어노테이션 기반 매퍼
    // - 간단한 쿼리에 경우 사용하기 편리
    // - Java 코드 내에서 SQL 을 직접 볼 수 있어서 즉각적인 이해 가능
    // - @Select, @Insert, @Update, @Delete annotation 사용
    @Select("select * from users")
    List<User> findAll();   //모든 사용자를 조회

}
