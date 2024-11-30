//package com.ticfoundation.ticfoundationbackend.exceptions;
//
//import java.security.SecureRandom;
//import java.security.SecureRandom;
//public class TokenGenerator {
//    private static final String CHARACTERS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    private static final int TOKEN_LENGTH = 100; // Adjust the length as needed
//
//    public static void main(String[] args) {
//        SecureRandom random = new SecureRandom();
//        StringBuilder token = new StringBuilder(TOKEN_LENGTH);
//
//        for (int i = 0; i < TOKEN_LENGTH; i++) {
//            int index = random.nextInt(CHARACTERS.length());
//            token.append(CHARACTERS.charAt(index));
//        }
//
//        System.out.println(token.toString());
//    }
//}
