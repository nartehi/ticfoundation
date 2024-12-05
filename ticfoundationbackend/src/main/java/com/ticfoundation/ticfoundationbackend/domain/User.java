package com.ticfoundation.ticfoundationbackend.domain;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "USER_REGISTRATION")
public class User implements UserDetails {
    private static final String AUTHORITIES_DELIMITER = ","; // Updated delimiter for consistency

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String username; // Ensure this matches the field used for username
    private String email;
    private String password;

    @Column(name = "authorities", nullable = false)
    private String authorities; // Serialized representation of roles

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities == null || authorities.isEmpty()
                ? List.of()
                : Arrays.stream(authorities.split(AUTHORITIES_DELIMITER))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public  String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
