const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
const fynx = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`❌ **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`).then(m => m.delete({timeout: 5000}));

 if(!rol) return message.channel.send(`❌ **Lütfen Bir Rol Belirt!**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @rol #kanal\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `).then(m => m.delete({timeout: 5000}));

 if(!kanal) return message.channel.send(`❌ **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``).then(m => m.delete({timeout: 5000}));

  message.channel.send(`╔▬▬▬▬▬▬▬▬ ShibaBOT Otorol ▬▬▬▬▬▬▬▬▬
║► Otorol Aktif Edildi.
║► **${rol}** Olarak Ayarladım!
║► Otorol Kanalını **${kanal}** Olarak Ayarladım!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`).then(m => m.delete({timeout: 5000}));

 
  db.set(`otoRL_${message.guild.id}`, rol.id)
  db.set(`otoRK_${message.guild.id}`, kanal.id)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 4,
    aliases: ['otorol-ayarla',"otorolayarla","otorol"]
  };

  exports.help = {
    name: 'otorol-ayarla',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'ototrol'
  };
