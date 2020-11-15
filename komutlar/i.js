const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let msg = message
   const bune = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const kolgh = new Discord.RichEmbed()
  .setColor('BLUE')
  .setFooter('İstatistikler', bot.user.avatarURL)
  .addField("»**Botun Sahibi**", "<@495189931300487198> X <@712455905874018357> X <@725788906418733096>")
  .addField("»**Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("»**Çalışma süresi**", bune)
  .addField('»**Kullanıcılar**:', bot.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField("»**Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("»**Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("»**Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("»**Node.JS sürüm**", `${process.version}`, true)
  .addField("»**Ping**", bot.ping+" ms", true)
  .addField("»**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("»**Bit**", `\`${os.arch()}\``, true)
  .addField("»**İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/api/oauth2/authorize?client_id=735822471441154088&permissions=8&scope=bot)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/)", )
   //
 return message.channel.send(kolgh);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botbilgi" , "istatistik"],
  permLevel: 0
};

exports.help = {
  name: "i",
  description: "Bot i",
  usage: "istatistik"
};