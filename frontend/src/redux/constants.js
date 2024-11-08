// export const BASE_URL = "https://fstore-mq5w.vercel.app";
// export const USERS_URL = "/api/users";
// export const CATEGORY_URL = "/api/category";
// export const PRODUCT_URL = "/api/products";
// export const UPLOAD_URL = "/api/upload";
// export const ORDERS_URL = "/api/orders";
// export const PAYPAL_URL = "/api/config/paypal";

export const BASE_URL = import.meta.env.VITE_API_URL;
// Users API endpoints
export const USERS_URL = `${BASE_URL}/api/users`;

// Categories API endpoints
export const CATEGORY_URL = `${BASE_URL}/api/category`;

// Products API endpoints
export const PRODUCT_URL = `${BASE_URL}/api/products`;
export const UPLOAD_URL = `${BASE_URL}/api/upload`;

// Orders API endpoints
export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const PAYPAL_URL = `${BASE_URL}/api/paypal`;
