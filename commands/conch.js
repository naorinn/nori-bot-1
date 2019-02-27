const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

  try {
    if (!args[0]) return message.channel.send('Proper Usage: <prefix>conch question');

    var replies = [
      "Maybe someday.",
      "Follow the seahorse.",
      "I don't think so.",
      "No.",
      "Yes.",
      "Try asking again.",
      "[In a very insulting, sarcastic-like tone] No."
    ];

    var random = Math.floor(Math.random() * replies.length);

    const embed = new Discord.RichEmbed()
      .setColor(16754843)
      .setDescription(message.author.username)
      .addField("❓ Question", args.join(' '))
      .addField("<:conch:550193077675884544> Magic Conch", replies[random])

    message.channel.send(embed);

    message.delete({ timeout: 1000 });

  } catch (e) {
    console.log(e);
  }

}
