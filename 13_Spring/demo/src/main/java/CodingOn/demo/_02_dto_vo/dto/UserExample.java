package CodingOn.demo._02_dto_vo.dto;

public class UserExample {
    public static void main(String[] args) {
        UserDTO u1 = new UserDTO();
        u1.setId(1L);
        u1.setUsername("John");
        u1.setEmail("john@gmail.com");
        u1.setAge(30);
        System.out.println("u1: " + u1);
        // UserDTO 객체 생성(모든 필드 포함)
        UserDTO u2 = new UserDTO(2L, "Nomin", "nomin@gmail.com", 25);
        System.out.println("u2: " + u2);

        // getter
        System.out.println("u2.getUsername(): " + u2.getUsername());

        //setter
        u2.setUsername("Erdene");
        System.out.println("u2: " + u2);
    }


}
