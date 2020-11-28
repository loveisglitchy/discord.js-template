const { Client, Collection } = require('discord.js');
const Util = require('./Util.js');

module.exports = class CLIENT extends Client {

	constructor(options = {}) {
		super({
			partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
           		autoReconnect: true,
            		//ws: {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_PRESENCES"]},
            		disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.events = new Collection();

		this.utils = new Util(this);

		this.owners = options.owners;
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options should be a type of Object.');

		if (!options.token) throw new Error('You must pass the token for the client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You must pass a prefix for the client.');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix should be a type of String.');
		this.prefix = options.prefix;
	}

	async init(mongoose) {
        	await this.mongoose.init(this);
    
	}
	async start(token = this.token) {
		this.utils.loadCommands();
		this.utils.loadEvents();
		super.login(token);
	}

};
