require("dotenv").config();

const Client = require('./Structures/Client');

const config = process.env;


const client = new Client(config);

client.init();
client.start();
