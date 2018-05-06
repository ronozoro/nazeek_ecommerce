const ROOT_URL = "http://0.0.0.0:8000/";//18.197.50.198

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
    userCheckout:`${ROOT_URL}api/user/checkout/`,
    creatAdress:`${ROOT_URL}api/user/address/create/`,
    getAdress:`${ROOT_URL}api/user/address/`,
    userId:`${ROOT_URL}api/user/get/`,
    checkoutUrl:`${ROOT_URL}api/checkout/`

}
export const  wishListUrl={
    createList:`${ROOT_URL}api/wishlist/`,
    addtoList:`${ROOT_URL}api/wishlistitems/`,
    getItems:`${ROOT_URL}api/wishlistitems/`,
    getCount:`${ROOT_URL}api/wishlistitemcount/`,
    deleteItem:`${ROOT_URL}api/wishlist/`
}
export const ReviewsUrl={
    createReview:`${ROOT_URL}api/reviews/`
}
 export const filtersUrl={
     products:`${ROOT_URL}api/categories/`
 }

