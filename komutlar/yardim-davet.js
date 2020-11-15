  const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Davet Menüsü`)
.setColor('BLACK')
.addField("Destiny'i Eklemek İsterseniz -davet",`
**:white_small_square: = \`-davet-kanal\` : Davet Kanalı Belirlersiniz**
**:white_small_square: = \`-davet-ekle\` : Seçilen Kullanıcıya Davet Ekler**
**:white_small_square: = \`-davet-sil\` : Seçilen Kullanıcıya Davet Siler**
**:white_small_square: = \`-davet-sıfırla\` : Tüm Davetleri Siler**
**:white_small_square: = \`-davet-kanal-sıfırla\` : Davet Kanalını Siler**
**:white_small_square: = \`-davetler\`  : Tüm Davetlerini Gösterir**`)
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
  name: 'invite'
}; 