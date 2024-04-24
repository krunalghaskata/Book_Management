// errorHandler.js

class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

const handleError = (err, res) => {
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({
        status: 'error  Internal Server Error',
        statusCode: statusCode || 500,
        message: message || 'Internal Server Error'
    });
};

module.exports = {
    CustomError,
    handleError
};
