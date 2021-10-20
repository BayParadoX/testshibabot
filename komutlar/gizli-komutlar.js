const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json"); // KENDİNİZE GÖRE TANIMLAYIN
exports.run = (client, message) => {
  const betayardım = new Discord.MessageEmbed()
    .setColor("31")
    .setTitle("**gizli komutlar**")
    .addField('**Komutlar**',' Tüm komutlar burdadır!')
    .addField(' mizaj',' 31 mizaj')
    .addField(' aykute',' Osman seni çizdim he ')
    .addField(' becer',' sik oni ')
    .addField(' ccc',' Vatan kurtarıldı CCC ')
    .addField(' mertacet',' Hemçkır abi ')
    .addField(' juniper-ajar',' +18 foto sitesi ')
    .addField(' boing','  boing boing memeler 1')
    .addField(' boing2',' boing boing memeler 2 ')
    .addField(' boing3',' boing boing memeler 3 ')
    .addField(' boing4',' boing boing memeler 4 ')
    .addField("Bağlantılar", `
**[Destek Sunucusu](https://discord.gg/j8fVRwQy6m)** **•** **[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=854049797278007366&permissions=8&scope=bot)** `)
.setThumbnail(client.user.avatarURL())
.setFooter(`${message.author.tag} Tarafından İstendi.`,message.author.avatarURL());
return message.channel.send(betayardım)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
  exports.help = {
    name: 'nNmhqipLqSLgy0d',
    description: 'Botun Komut listesi!',
    usage: 'nNmhqipLqSLgy0d'
};

// ÖRNEK BİR YARDIM MENÜSÜDÜR KENDİNİZE GÖRE DEĞİŞTİRİN
