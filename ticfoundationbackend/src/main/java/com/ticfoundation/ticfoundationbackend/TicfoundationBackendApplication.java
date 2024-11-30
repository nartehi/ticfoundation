package com.ticfoundation.ticfoundationbackend;
//
//import com.ticfoundation.ticfoundationbackend.domain.Role;
//import com.ticfoundation.ticfoundationbackend.domain.User;
//import com.ticfoundation.ticfoundationbackend.service.UserService;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class TicfoundationBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TicfoundationBackendApplication.class, args);

	}




//	@Bean
//	CommandLineRunner run(UserService userService) {
//		return args -> {
//			userService.saveRole(new Role(null,"ROLE_USER"));
//			userService.saveRole(new Role(null,"ROLE_ADMIN"));
//			userService.saveRole(new Role(null,"ROLE_MANAGER"));
//			userService.saveRole(new Role(null,"ROLE_SUPER_ADMIN"));
//
//
//			userService.saveUser( new User(null, "Liliane Azabe","azabel","123",new ArrayList<>()) );
//			userService.saveUser( new User(null, "Isaac Narteh","isaac","1234",new ArrayList<>()) );
//			userService.saveUser( new User(null, "Bright Owusu","bright","bright123",new ArrayList<>()) );
//			userService.saveUser( new User(null, "Ama Akwasi","ama","ama123",new ArrayList<>()) );
//			userService.saveUser( new User(null, "Finn Doe","doefinn","doe123",new ArrayList<>()) );
//
//
//			userService.addRoleToUser("azabel", "ROLE_USER");
//			userService.addRoleToUser("azabel", "ROLE_SUPER_ADMIN");
//			userService.addRoleToUser("isaac", "ROLE_ADMIN");
//			userService.addRoleToUser("isaac", "ROLE_SUPER_ADMIN");
//			userService.addRoleToUser("bright", "ROLE_MANAGER");
//			userService.addRoleToUser("ama", "ROLE_SUPER_ADMIN");
//			userService.addRoleToUser("doefinn", "ROLE_USER");
//
//		};
//	}
}
