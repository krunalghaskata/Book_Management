require("dotenv").config();

const config = {
    PORT: process.env.PORT || 7600,
    DB: {
        CONNECTION_URL: process.env.DB_CONNECTION_URL,
    },
    TOKEN: {
        SIGN: process.env.TOKEN_SIGN,
        LIFE_TIME: process.env.TOKEN_EXPIRED
    },
    RATE_LIMIT: {
        TIME_LIMIT: Number(process.env.WINDOW_TIME_LIMIT),
        REQ_LIMITED: Number(process.env.REQ_LIMIT)
    },
    EMAIL: {
        USER: process.env.EMAIL_USER,
        PASSWORD: process.env.EMAIL_PASSWORD
    },
    REDIS: {
        REDIS_PORTS: process.env.REDIS_PORT,
        REDIS_HOSTS: process.env.REDIS_HOST
    },
    PAYMENT: {
        PAYMENT_KEY: process.env.PAY_KEY,
        PAYMENT_PUBLIC_KEY: process.env.PAY_PUBLIC_KEY
    }

};
module.exports = config;