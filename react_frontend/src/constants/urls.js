const ROOT_URL = "http://localhost:8000/";

export const AuthUrls = {
    LOGIN: `${ROOT_URL}rest-auth/login/`,
    SIGNUP: `${ROOT_URL}rest-auth/registration/`,
    CHANGE_PASSWORD: `${ROOT_URL}rest-auth/password/change/`,
    RESET_PASSWORD: `${ROOT_URL}rest-auth/password/reset/`,
    RESET_PASSWORD_CONFIRM: `${ROOT_URL}rest-auth/password/reset/confirm/`,
    USER_ACTIVATION: `${ROOT_URL}rest-auth/registration/verify-email/`,
    USER_PROFILE: `${ROOT_URL}rest-auth/user/`
};
export const ShopUrls = {
    PRODUCTS: `${ROOT_URL}api/products`,
    CATEGORIES: `${ROOT_URL}api/categories`,
    BRANDS: `${ROOT_URL}api/brands`,
    SELLERS: `${ROOT_URL}api/sellers`,
};;
export const CartUrls={
    cart:`${ROOT_URL}api/cart/`,
}