const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Eğlence Menüsü`)
.setColor('BLACK')
.addField("Eğlenme Vakti!",`
**:game_die: : \`-zarat\` : Zar atarsınız.**
**:trophy: : \`-tkm\` : Taş kağıt makas oynarsınız.**
**:no_entry: : \`-wasted\` : Avatarınıza wasted efekti ekler.**
**:nauseated_face: : \`-pixel\` : Avatarınızı pixelleştirir.**
**:skull_crossbones: : \`-zıtrenk\` : Avatarınızı zıt renge çevirir.**
**:flying_disc: : \`-yazıtura\` : Yazı tura oyunu oynarsınız.**`)
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
  name: 'eğlence'
}; 