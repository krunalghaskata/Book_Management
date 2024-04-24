const Message = {
    INVALID_EMAIL: "Invalid Email",
    ID: "Id Not Found",
    NOT_FOUND: "404 Not Found",
    ROLE: " Role Input Require",
    REQUIRED_INPUT: "Please Required Input",
    USER_EXIST: "User Already Exist Please Login",
    INVALID_PASSWORD: "Invalid Password",
    SIGNUP_FIRST: "Please Signup First",
    USER_NOT_FOUND: " User Not Found",
    USER_UPDATED: "User Updated Sucessfully",
    DELETE_USER: "User Delete Sucessfully",
    REQUIRE_AUTHENTICATION: "Please Require Authorization Token ",
    REQUIRE_LOGIN: "Require Login Please",
    REQUIRE_TOKEN: "Required Token ",
    LOGIN_SUCCESS: "Login Sucessfully",
    LOGOUT_SUCCESS: 'LogOut sucessfully ',
    BOOK_CREATE: "Book Create Sucessfully",
    BOOK_NOT_FOUND: "Book Not Found",
    LOGIN_AFTER_CREATE_BOOK: "User Not Found Please Login After Create Book",
    YOU_NOT_CREATE_BOOK: "Access Denied Only Author Can Create  a Book",
    YOU_NOT_UPDATE_BOOK: "Access Denied Only Author Can Update  a Book",
    YOU_NOT_DELETE_BOOK: "Access Denied Only Author Can Delete  a Book",
    UPDATE_BOOKS: "Books Updated Successfully",
    BOOK_DELETE: "Book Delete Sucessfully",
    AUTHOR_CREATE_: "Author Can Create Book Not Found",
    ID_NOT_MATCH_UPDATE: "Book Not Found Or Unauthorized To Update",
    ID_NOT_MATCH_DELETE: "Book Not Found Or Unauthorized To Delete",
    BOOK_CREATED_NOT_FOUND: "When We Find The Book, The Author Is Not Found",
    NO_FILE_UPLOADED: "You Have Not uploaded An Image ",
    USER_BOOK_NOT_FOUND: "User Or Book Not Found",
    OUT_OF_STOCK: "Not enough Stock Available",
    BOOK_ADD_TO_CART: "Book Add To Cart Sucessfully",
    CART_ITEMS_DELETE: 'Cart Items Delete Sucessfully',
    CART_NOT_FOUND: "Cart Not Found",
    ITEM_NOT_FOUND_IN_CART: "Items  Not Found In Cart",
    CART_UPDATE: "Cart Updated Sucessfully",
    LIMIT_STOCK: " Limited Stock ",
    ORDER_SUCCESS: "Your Order  Successfully ",
    CART_EMPTY: "Cart Is Empty",
    ORDER_NOT_FOUND: "Oreder Not Found",
    CART_DELETED: "cart delete",
    FORBIDDEN: "Forbidden",
    AUTHOR_ORDER_FIND: "Author Find All Order",
    INVALID_STATUS: "Invalid Status Find",
    PASSWORD_NOT_MATCH: "password are not match",
    PASSWORD_UPDATED_SUCESS: "password updated sucessfully",
    RESET_PASSWORD: "reset Password sucessfully",
    MIN_MAX_PRICE: "Manimum and miximum price of the book",
    AUTHOR_NOT_CREATE_SPECIFIC_BOOK: "Forbidden: This author did not create the specified book",
    ORDER_NOT_FOUND_AUTH: "Order Not Found For Authentication ",
    ORDER_STATUS_UPDATED: "Order Status Updated Sucessfully",
    OTP_EXIST: "OTP Already Generated For This User",
    OTP_SEND_EMAIL: "OTP Has Been Sent, Please Check Your Email",
    OTP_NOT_FOUND: "OTP Not Found For The User ",
    OTP_VERIFY: "OTP Verifyed Sucessfully",
    INVALID_OTP: "Invalid OTP",
    OTP_EXPIRED: "OTP Has Been Timed Out",
    PASSWORD_MISMATCH: "Password Not Match",
    OTP_VERIFY_FIRST: "First Verify OTP then login",
    MAX_RATING: "invalid You can give only 5 ratings",
    LESS_RETING: "Invalid You can not rate less than 0",
    FEEDBACK_SUCCESS: 'Feedback created successfully',
    UNAUTHORIZED: "Unauthorized"




}

const getMessage = (key) => {
    if (Message[key]) {
        return Message[key]
    }
    return "message key not found"
}
module.exports = getMessage