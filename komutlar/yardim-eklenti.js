const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Eklenti Menüsü`)
.setColor('BLACK')
.addField("Destiny'in gelişmiş sistemleri!",`
**:rocket: : \`-invite\` : Davet sistemi komutlarını gösterir.**
**:pushpin: : \`-yardımkayıt\` : Kayıt sistemi komutlarını gösterir.**
**:tada: : \`-sunucu-kur\` : Basit bir sunucu kurar. (YAKINDA)**
**:satellite: : \`-panel-kur\` : Sunucuda kişi paneli oluşturur.**`)
.addField('Destiny',`[Botu Davet Et](https://bit.ly/destinybot)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'eklenti'
}; 