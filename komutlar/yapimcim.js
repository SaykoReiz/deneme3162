const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**Dostum, işte botun havalı kodlayıcıları ;**', '<@495189931300487198> X <@725788906418733096> X <@712455905874018357>')
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahibim'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};