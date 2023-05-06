// Initialize sample data for the database

const mongoose = require('mongoose');
const Phone = require('../models/Phone.model');

//sample data is in a json file, import it

const samplePhones = require('./samplePhones.json');

//connect to the database

