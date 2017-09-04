let Discord = require('discord.js');
let client = new Discord.Client();
let settings = require('./settings.json');

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "*"
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
	if (message.content.startsWith(prefix + 'prune')) {
if (!message.member) return;  
    try {
    let amount = message.content.split(" ").splice(1, 2).join(" ");
        if(amount < 1) {
            return message.reply("The amount of messages to remove is 1-100.");
        }
        if(amount >100) {
            return message.reply("Choose a number between 1-100.");
        }
        message.channel.bulkDelete(amount);
        message.delete()
      message.channel.sendMessage("Purged: " + amount + " Messages").then(m => m.delete(2500));
    } catch(err) {
			message.channel.sendCode('js', `${err}\nThe role Bot Commander was not found.`)
		};
	}

if (message.content.startsWith(prefix + 'help')) {
	message.channel.send("Commands `CFeatures, CopsBuy, AS , credits, ping `")
};// THIS SEMICOLON IS A BREAK ok

if (message.content.startsWith(prefix + 'embed')) {
	let noto = message.content.split(" ").slice(1).join(" ");
	message.delete();
	var embed = new Discord.RichEmbed();
  embed.setColor("#53A6F3")
  .setDescription(noto)
  message.channel.sendEmbed(embed, {disableEveryon: true});
};

});

client.login(settings.token);
