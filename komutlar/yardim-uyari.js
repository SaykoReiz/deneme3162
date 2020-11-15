const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`Destiny Uyarı Menüsü`)
.setColor('BLACK')
.addField("Destiny'i Eklemek İsterseniz d!davet",`
**:white_small_square: = \`-uyar\` : Belirtilen Kişiyi Uyarır**
**:white_small_square: = \`-uyarı-sil\` : Kişinin Uyarılarını Siler**
**:white_small_square: = \`-uyarılar\` : Kişinin Uyarılarını Görürsünüz**`)
.addField('Destiny',`[Botu Davet Et](https://bit.ly/destinyboy)`)
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
  name: 'yardımuyarı'
}; 