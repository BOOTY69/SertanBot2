let Discord = require('discord.js');
let client = new Discord.Client();
let settings = require('./settings.json');

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "^"
client.on('message', message => {

	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.send('no pong just suck sum');
	};

	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'credits')) {
		message.channel.send('Made By SertanVS credits goes to aeris for helping me wtih the bot');
	};

	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'AS')) {
		message.channel.send('https://autoskillz.net/');
	};

	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'CopsBuy')) {
		message.channel.send('To Buy Premuim Of Critical ops PM @Staff or Ruit to buy or Buy From Website');
	};
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'CFeatures')) {
		message.channel.send('https://autoskillz.net/topic/11-released-critical-ops-hack-features-list/?tab=comments#comment-12');
	};

	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'Robots')) {
		message.channel.send('You can buy War Robots Premuim Soon');
	};
	
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'invite')) {
		message.channel.send('https://discordapp.com/oauth2/authorize?client_id=353795583552782338&scope=bot&permissions=2146958591');
	};

	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
		message.channel.send('Commands : `invite, Robots, CFeatures, CopsBuy, AS, credits, ping`');
	};
	
	if (message.author === client.user) return;
		if (message.content.startsWith(prefix + 'purge')) {
 +if (!message.member) return;  
 +    try {
 +    let amount = message.content.split(" ").splice(1, 2).join(" ");
 +        if(amount < 1) {
 +            return message.reply("The amount of messages to remove is 1-100.");
 +        }
 +        if(amount >100) {
 +            return message.reply("Choose a number between 1-100.");
 +        }
 +        message.channel.bulkDelete(amount);
 +        message.delete()
 +      message.channel.sendMessage("Purged: " + amount + " Messages").then(m => m.delete(2500));
 +    } catch(err) {
 +			message.channel.sendCode('js', `${err}`)
 +		};
 +	}
 

	if (message.content.startsWith(prefix + 'myperms')) {
      message.channel.send('`Your permissions are:\n`' +
        JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4));
    };

		if (message.content.startsWith(prefix + 'setname')) {
      message.channel.setName(message.content.substr(8));
    };

		if (message.content.startsWith(prefix + 'stats')) {
		 let m = '';
		 m += `They are ${message.guild.channels.size} channels\n`;
		 m += `They are ${message.guild.members.size} members\n`;
		 m += `They are ${client.channels.size} channels\n`;
		 m += `They are ${client.guilds.size} guilds\n`;
		 m += `They are ${client.users.size} users\n`;
		 message.channel.send(m).then(msg => msg.edit(m)).catch(console.error);
	 };


	if (message.content.startsWith(prefix + 'userinfo')) {
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("This is your user's info!")
		.setColor("#428cdf")
		.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
		.addField("ID", message.author.id)
		.addField("Avatar", message.author.avatarURL);

		message.channel.sendEmbed(embed);
	};

});

client.login(settings.token);
