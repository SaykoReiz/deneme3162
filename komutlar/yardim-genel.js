const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`Destiny Genel Komut Menüsü`)
.setColor('BLACK')
.addField("Destiny'i Eklemek İsterseniz davet",`
**:anger:  : \`-davet\` :  Bot davet linkini gönderirsin.**
**:bug: : \`-hata-bildir\` : Hata bildirimi.**
**👤  : \`-profil\` : Kullanıcı bilgilerini gönderir.**
**:question:  : \`-botbilgi\` : Bot hakkında bilgi verir.**
**:zzz:  : \`-afk\` : AFK moduna geçiş yaparsın.**
**:white_flower:  : \`-korona\` : Korona ülke kodları ile bilgi verir.**
**:writing_hand:  : \`-embed\` : Embed yazısı ile bota yazı yazdırırsın.**
**:smile: : \`-pp\` : Profil fotoğrafını kanala gönderir.**
**:hammer: : \`-sahibim\` : Geliştiricilerimi Görebilirsiniz.**`)
.addField('Aşağıdaki linke tıkla! ',`[Botu Davet Et](https://bit.ly/destinybot)`) 
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
  name: 'genel'
}; 