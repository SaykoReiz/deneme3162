const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Logo Yapma Menüsü`)
.setColor('BLACK')
.addField("Destiny | Logo Yapma Sistemi",`
**:white_small_square: = \`-dinamik\` : Dinamik logo yapar.**
**:white_small_square: = \`-altın\` : Altın logo yapar.**`)
.setImage("https://cdn.discordapp.com/attachments/727260799352963194/743866019390554171/AyrmaCubugu_rainboww.gif")
.addField('Destiny',`[Linke Tıkla Davet Et!](https://bit.ly/destinybot)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["logo","yardım"], 
  permLevel: 0
};
exports.help = {
  name: "logo"
}; 