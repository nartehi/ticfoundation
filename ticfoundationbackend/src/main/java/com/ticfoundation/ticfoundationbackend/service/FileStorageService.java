package com.ticfoundation.ticfoundationbackend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//@Service
//public class FileStorageService {
//    private static final Logger logger = LoggerFactory.getLogger(FileStorageService.class);
//
//    @Value("${file.upload-dir}")
//    private String uploadDir;
//
//    public String storeFile(MultipartFile file) throws IOException {
//        // Log the upload directory
//        logger.info("Upload directory: {}", uploadDir);
//
//        Path uploadPath = Paths.get(uploadDir);
//        if (!Files.exists(uploadPath)) {
//            Files.createDirectories(uploadPath);
//            logger.info("Created upload directory: {}", uploadDir);
//        }
//
//        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
//        Path filePath = uploadPath.resolve(fileName);
//        logger.info("Saving file to: {}", filePath.toString());
//
//        file.transferTo(filePath.toFile());
//        return filePath.toString();
//    }
//}
@Service
public class FileStorageService {
    private static final Logger logger = LoggerFactory.getLogger(FileStorageService.class);
    @Value("${file.upload-dir}")
    private String uploadDir;

    public FileStorageService() {

    }

    public String storeFile(MultipartFile file) throws IOException {
        logger.info("Upload directory: {}", uploadDir);
        // Resolve the path to an absolute directory
        Path uploadPath = Paths.get(uploadDir).toAbsolutePath().normalize();

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
            logger.info("Created upload directory: {}", uploadDir);
        }

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        logger.info("Saving file to: {}", filePath.toString());


        // Save the file
        file.transferTo(filePath.toFile());

        return filePath.toString();
    }
}
