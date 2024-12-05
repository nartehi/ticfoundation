// Base API path
export const API_BASE_URL = 'http://localhost:3900/api';

// Endpoints for Users
export const USER_API = {
    GET_ALL_USERS: `${API_BASE_URL}/users`,
    GET_USER_BY_ID: `${API_BASE_URL}/users/:id`,
    CREATE_NEW_USER: `${API_BASE_URL}/create`,
    EDIT_USER_DETAILS: `${API_BASE_URL}/user/edit`,
    DELETE_USER: `${API_BASE_URL}/user/delete`,
    USER_LOGIN: `${API_BASE_URL}/user/login`,
    USER_PROFILE: `${API_BASE_URL}/user/profile`,
};

// Endpoints for Admins
export const ADMIN_API = {
    GET_ALL_ADMINS: `${API_BASE_URL}/admins`,
    GET_ADMIN_BY_ID: `${API_BASE_URL}/admins/:id`,
    CREATE_NEW_ADMIN: `${API_BASE_URL}/admin/create`,
    EDIT_ADMIN_DETAILS: `${API_BASE_URL}/admin/edit`,
    DELETE_ADMIN: `${API_BASE_URL}/admin/delete`,
    ADMIN_LOGIN: `${API_BASE_URL}/admin/login`,
    ADMIN_PROFILE: `${API_BASE_URL}/admin/profile`,
};

// Endpoints for Courses
export const COURSE_API = {
    GET_ALL_COURSES: `${API_BASE_URL}/courses`,
};
