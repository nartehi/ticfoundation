package com.ticfoundation.ticfoundationbackend.aspect;

import com.ticfoundation.ticfoundationbackend.annotations.AllowedRoles;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.List;

@Aspect
@Component
public class RoleCheckAspect {

    @Before("@annotation(allowedRoles)")
    public void checkRoles(AllowedRoles allowedRoles) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new SecurityException("User is not authenticated");
        }

        // Get the roles of the current user from the authentication object
        List<String> userRoles = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        // Check if the user has any of the required roles
        String[] requiredRoles = allowedRoles.value();
        boolean hasRequiredRole = Arrays.stream(requiredRoles)
                .anyMatch(userRoles::contains);

        if (!hasRequiredRole) {
            throw new SecurityException("User does not have the required role(s)");
        }
    }
}
