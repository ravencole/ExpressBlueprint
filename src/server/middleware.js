const path = require('path'),
      multer = require('multer'),
      cors = require('cors'),
      compression = require('compression'),
      session = require('express-session'),
      bodyParser = require('body-parser');

const API = process.env.API || false;

const middleware = (app) => {
    const storage = {
        dest: path.join(__dirname, 'uploads/'),
    }
    const upload = multer({storage});

    if (API) {
        app.use(cors());
    }

    app.use(compression());
    app.use(session({ 
        secret: 'keyboard cat', 
        cookie: { maxAge: 60000 }
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    return {
        upload
    }
}

module.exports = middleware;