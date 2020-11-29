const Command = require('../../Structures/Command');

module.exports = class extends Command {
    constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Changes the prefix for the current server.',
			category: 'Config',
            usage: '<new prefix>',
            userPerm: ['MANAGE_GUILD']
		});
    }
    
    async run(message, args, data) {
        let prefix = args[0]

        if (!prefix) {
            return this.client.utils.error("You need to provide a new prefix.", message.channel);
        }

        if (prefix.length > 15) {
            return this.client.utils.error("The new prefix must be under 15 characters long.", message.channel);
        }

        if (prefix === data.guild.prefix) {
            return this.client.utils.error(`Please give me a prefix other than what you are using now`, message.channel);
        }

        data.guild.prefix = args[0];
        await data.guild.save();
        this.client.utils.success(`The new prefix for **${message.guild.name}** has been set to \`${prefix}\`, try \`${prefix}help\``, message.channel);
    }
};