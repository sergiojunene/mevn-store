// IMPORT MODULES AND PACKAGE
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// * VARIABLES

// MONGODB_LOCAL_CNN
const DB_NAME = process.env.DB_NAME;
const USERNAME = process.env.USERNAME; 
const MONGO_LOCAL_URL = process.env.MONGO_LOCAL_URL;
// MONGODB_REMOTE_CNN
const DB_NAME = DB_NAME;
const MONGODB_REMOTE_URL = process.env.MONGODB_REMOTE_URL;

