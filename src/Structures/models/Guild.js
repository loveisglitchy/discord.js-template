const { Schema, model } = require('mongoose');

const Guild = new Schema({
    id: { type: String },
    prefix: { type: String, default: ","},
});

module.exports=model("Guild", Guild);