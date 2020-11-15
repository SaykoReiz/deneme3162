const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Ayarlar Menüsü`)
.setColor('BLACK')
.addField("Destiny'i Eklemek İsterseniz -davet",`
**:x: : \`-reklam-engel\` : Sunucuda reklam yapılmasını engeller.**
**:hammer_pick: : \`-prefix\` : Prefix ayarlarsınız.**
**:no_entry: : \`-ban\` : Etiketlediğiniz kişiyi sunucudan yasaklar.**
**:boxing_glove: : \`-kick\` : Etiketlediğiniz kişiyi sunucudan atar.**
**:ballot_box_with_check: : \`-unban\` : Etiketlediğiniz kişinin banını açar.**
**:hammer_pick: : \`-modlog\` : Ayarladığınız kanala sunucunun loglarını gönderir.**
**:recycle: : \`-sayaç\` : Sunucunuzda sayaç sistemi çalıştırır.**
**:satellite: : \`-yardımuyarı\` : Uyarı sisteminin yardım menüsünü açar.**
**:unlock: : \`-sayaç-kapat\` : Sunucuda sayaç ayarlıysa sayaçı kaldırır.**
**:round_pushpin: : \`-bansay\` : Sunucuda yasaklanan kişilerin sayısını gösterir.**
**:rocket: : \`-banaffı\` : Sunucudaki herkesin yasaklamasını kaldırır.**
**:candle: : \`-yavaşmod\` : Girdiğiniz sayı kadar sunucuda yavaş mod ayarlar.**
**:police_officer: : \`-güvenlik\` : Güvenlik sistemini açar.**
**:detective: : \`-rolkoruma\` : Rol koruma sistemini açar.**`)
.addField('Destiny',`[Botu Davet Et](https://bit.ly/destinybot)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ayarlar","yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'ayarlar'
}; 