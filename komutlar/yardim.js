const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`Destiny'in yardım menüsüne hoşgeldin!`)
.setColor('BLACK')
.addField("Destiny | Yardım Komutları! <a:TaDa:742698068411023441>",`
**<a:yan:750065080741134407> \`-genel\` : Genel komutları açar.**
**<a:yan:750065080741134407> \`-ayarlar\` : Moderasyon komutlarını açar.**
**<a:yan:750065080741134407> \`-sunucu\` : Sunucu komutlarını açar.**
**<a:yan:750065080741134407> \`-eğlence\` : Eğlence komutlarını açar.**
**<a:yan:750065080741134407> \`-yardımkayıt\` : Kayıt komutlarını açar.**
**<a:yan:750065080741134407> \`-logo\` : Logo yapma komutlarını açar.**
**<a:yan:750065080741134407> \`-eklenti\` : Eklenti komutlarını açar.**`)
.addField('Destiny, sizin için geliştirildi! <a:Yldz:742698148329291826>',`[Botu Sunucuna Eklemek için Tıkla!](https://bit.ly/destinybot)`)
 .setImage('https://cdn.discordapp.com/attachments/727260799352963194/743866019390554171/AyrmaCubugu_rainboww.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım","yardim"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 