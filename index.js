// IMPORTS MODULES AND PACKAGES:
const cors      =   require('cors');
const express   =   require('express');
const morgan    =   require('morgan');
const path      =   require('path');
const dotenv    =   require('dotenv').config();

// VARIABLES:
const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '/public' + '/index.html');

console.log( PUBLIC_PATH  );

// MIDDLEWARES:
app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );
app.use( morgan('dev') );
app.use( cors() );


// ROUTES:

// SERVER CONFIG:
app.listen(() => console.log('Server running on port: ', PORT));


