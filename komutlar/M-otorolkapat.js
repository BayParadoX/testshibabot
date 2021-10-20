const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`❌ **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`).then(m => m.delete({timeout: 5000}));
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`❌ **Bu özellik zaten kapalı! **`).then(m => m.delete({timeout: 5000}));
 
 
  message.channel.send(`:white_check_mark: **Otorol Sistemi başarılı bir şekilde kapatıldı.**`).then(m => m.delete({timeout: 5000}));

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 4,
    aliases: ['otorol-kapat',"otorolkapat"]
  };
  
  exports.help = {
    name: 'otorol-kapat',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'otorolkapat'
  };