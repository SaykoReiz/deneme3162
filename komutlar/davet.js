const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const davet = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Destiny'i sunucuna davet et!`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField('-------------------------------------------',`[Tıkla!](https://bit.ly/destinybot)`)
    .setFooter(
      `${message.author.username} tarafından istendi. | Botu sunucuna eklemezsen pıçaklarım.`,
      message.author.avatarURL
    );
  return message.channel.sendEmbed(davet);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};