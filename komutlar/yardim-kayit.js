const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Sunucu Komutları Menüsü`)
.setColor('BLACK')
.addField("Destiny | Sunucu Sayfası",`
**:mega: : \`-duyuru\` : Bot duyuru yapar.**
**:postbox: : \`-oylama\` : Bot oylama başlatır.**
**:lock: : \`-kanal-gizle\` : Sohbeti gizlersiniz.**
**:unlock: : \`-kanal-gizle-kapat\` : Sohbet'in gizliliğini kaldırırsınız.**
**:tada: : \`-çekiliş\` : Bot çekiliş düzenler.**
**:busts_in_silhouette: : \`-hızlıçek\` : Çekiliş için hızlıca birini seçer.**
**:speaking_head: : \`-üye\` : Üyeler hakkında bilgi alırsınız.**
**:question: : \`-sunucubilgi\` : Sunucu hakkında bilgi alırsınız.**
**:pushpin: : \`-sunucudavet\` : Sunucunun davet linkini atar.**
**:airplane: : \`-canlı-destek\` : Canlı destek oluşturursunuz.**
**:police_officer: : \`-reklam-tara\` : Sunucuda reklam taraması çalıştırır.**`)
.addField('Destiny Link',`[Linke Tıkla Davet Et!](https://bit.ly/destinybot)`)
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
  name: 'sunucu'
}; 