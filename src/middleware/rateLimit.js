const { rateLimit } = require('express-rate-limit')
const CONFIG = require('../config/config')

const rateLimitConfig = rateLimit({
    windowMs: CONFIG.RATE_LIMIT.TIME_LIMIT,
    max: CONFIG.RATE_LIMIT.REQ_LIMITED,
    standardHeaders: true,
    legacyHeaders: false,
})

const ratelimiters = rateLimit(rateLimitConfig)


module.exports = ratelimiters



