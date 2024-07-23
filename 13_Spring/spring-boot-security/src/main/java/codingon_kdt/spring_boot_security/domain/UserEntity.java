package codingon_kdt.spring_boot_security.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="User", uniqueConstraints={@UniqueConstraint(columnNames = "email")})
// - email field unique 조건

public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // sql 에서 autoincrement
    @Column (name="id", nullable = false)
    private Long id;

    @Column (name="username", nullable = false)
    private String username;

    @Column (name="password", nullable = false)
    private String password;

    @Column (name="email", nullable = false)
    private String email;
}
