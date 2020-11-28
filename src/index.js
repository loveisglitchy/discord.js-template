require("dotenv").config();

const Client = require('./Structures/Client');

const config = process.env;


const client = new Client(config);

client.init(); //only if you want to use mongoose
client.start();
