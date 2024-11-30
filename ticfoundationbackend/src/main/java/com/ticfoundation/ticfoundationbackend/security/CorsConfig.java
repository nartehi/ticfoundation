//package com.ticfoundation.ticfoundationbackend.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfig {
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**")
//                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                        .allowedOrigins("*");
//
//            }
//        };
////        public CorsConfigurationSource corsConfigurationSource() {
////            CorsConfiguration configuration = new CorsConfiguration();
////            configuration.addAllowedOrigin("http://localhost:4200"); // Replace with your frontend URL
////            configuration.addAllowedMethod("*");
////            configuration.addAllowedHeader("*");
////            configuration.setAllowCredentials(true);
////            UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////            source.registerCorsConfiguration("/**", configuration);
////            return (WebMvcConfigurer) source;
////        }
//    }
//}
//
//
