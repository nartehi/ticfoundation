// Base API path
export const API_BASE_URL = 'http://localhost:3900/api';

// Endpoints for Users
export const USER_API = {
    GET_ALL_USERS: `${API_BASE_PATH}/users`,
    GET_USER_BY_ID: `${API_BASE_PATH}/users/:id`,
    CREATE_NEW_USER: `${API_BASE_PATH}/user/create`,
    EDIT_USER_DETAILS: `${API_BASE_PATH}/user/edit`,
    DELETE_USER: `${API_BASE_PATH}/user/delete`,
    USER_LOGIN: `${API_BASE_PATH}/user/login`,
    USER_PROFILE: `${API_BASE_PATH}/user/profile`,
};

// Endpoints for Admins
export const ADMIN_API = {
    GET_ALL_ADMINS: `${API_BASE_PATH}/admins`,
    GET_ADMIN_BY_ID: `${API_BASE_PATH}/admins/:id`,
    CREATE_NEW_ADMIN: `${API_BASE_PATH}/admin/create`,
    EDIT_ADMIN_DETAILS: `${API_BASE_PATH}/admin/edit`,
    DELETE_ADMIN: `${API_BASE_PATH}/admin/delete`,
    ADMIN_LOGIN: `${API_BASE_PATH}/admin/login`,
    ADMIN_PROFILE: `${API_BASE_PATH}/admin/profile`,
};

// Endpoints for Courses
export const COURSE_API = {
    GET_ALL_COURSES: `${API_BASE_PATH}/courses`,
};
