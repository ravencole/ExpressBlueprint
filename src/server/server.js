'use-strict'

const express      = require('express'),
      app          = express(),
      colors       = require('colors'),
      config       = require('../../config/config'),
      dotenv       = require('dotenv'),
      path         = require('path');

/* App Setup */
const ENV       = process.env.NODE_ENV || 'dev',
      envConfig = ENV === 'dev' ? path.join(__dirname, '../../.env.dev') : path.join(__dirname, '../../.env.prod');

dotenv.load({path: envConfig}); // load ENV settings

const PORT     = process.env.PORT || 8000,
      DB_URI   = process.env.DB_HOST || 'none/',
      DB_NAME  = process.env.DB_NAME || 'none',
      HOSTNAME = process.env.HOSTNAME || 'http://localhost',
      API      = process.env.API || false;


/* MiddleWare */
const middleware = require('./middleware')(app),
      upload     = middleware.upload;


/* Routes */
app.use('/user', require('../routes/userRouter')());

app.get('/', (req, res) => res.send("HA!"));
/* Error Handling */
require('./errorHandling')(app);

/* Server Start */
app.listen(PORT, writeInfoToConsoleOnServerStartUp());

function writeInfoToConsoleOnServerStartUp() {
    // if (ENV === 'prod') return;
    const enviornment = ENV === 'dev' ? 'Development' : 'Production';
    process.stdout.write('\u001b[2J\u001b[0;0H'); // clear terminal console
    console.log('-----------------------------------------------------------------------'.magenta);
    console.log(`| Enviornment: ${enviornment}`.blue);
    console.log('-----------------------------------------------------------------------'.magenta);
    console.log(`| Server:      ${HOSTNAME}:${PORT}`.blue);
    console.log('-----------------------------------------------------------------------'.magenta);
    console.log(`| Database:    ${DB_URI}${DB_NAME}`.blue);
    console.log('-----------------------------------------------------------------------'.magenta);
    console.log(`| API Mode:    ${API}`.blue);
    console.log('-----------------------------------------------------------------------'.magenta);
    console.log(`            Server running locally on port ${PORT}`.america);
    console.log('-----------------------------------------------------------------------'.magenta);
}

