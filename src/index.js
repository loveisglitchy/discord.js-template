require("dotenv").config();

const Client = require('./Structures/CLIENT');

const config = process.env;


const client = new Client(config);

/**
 * remove comment use mongoose
 * client.init(); 
 */

client.start();
