const errorhandler = require('errorhandler');

const errorHandler = (app) => {
    if (process.env.NODE_ENV === 'dev') {
        app.use(errorhandler());
    }
}

module.exports = errorHandler;