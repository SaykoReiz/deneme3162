const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Kayıt Menüsü`)
.setColor('BLACK')
.addField("Destiny | Kayıt Sistemi",`
**:white_small_square: = \`-kayıt-rol\` : Kayıt edilecek rolünü ayarlarsınız.**
**:white_small_square: = \`-kayıt-log\` : Kayıt denetim kanalını belirtlersiniz.**
**:white_small_square: = \`-kayıt-kanal\` : Kayıt için kanal seçersiniz d!kayıt İsim Yaş**`)
.addField('Destiny',`[Linke Tıkla Davet Et!](https://bit.ly/destinybot)`)
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
  name: 'yardımkayıt'
}; 