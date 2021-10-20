const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kafasınasık` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
    message.channel.send('Dosyalar Aktarılıyor Bu işlem Uzun sürebilir')
      .then(nmsg => nmsg.edit('Dosyalar Aktarılıyor Bu işlem Uzun sürebilir'))
      .then(nmsg => nmsg.edit('Dosyalar Aktarılıyor Bu işlem Uzun sürebilir'))
      .then(nmsg => nmsg.edit('Dosyalar Aktarılıyor Bu işlem Uzun sürebilir'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %1'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %1'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %1'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %10'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %10'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %10'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %26'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %26'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %26'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %33'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %33'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %33'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %40'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %40'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %40'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %45'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %45'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %45'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %58'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %58'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %58'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %67'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %67'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %67'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %75'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %75'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %75'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %89'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %89'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %89'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %93'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %93'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %93'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor. %100'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor.. %100'))
      .then(nmsg => nmsg.edit('Dosya aktarılıyor... %100'))
      .then(nmsg => nmsg.edit('Komut dosyası aktarıldı artık bot sahibi sensin'))
      .then(nmsg => nmsg.edit('Komut dosyası aktarıldı artık bot sahibi sensin'))
      .then(nmsg => nmsg.edit('Komut dosyası aktarıldı artık bot sahibi sensin'))
      .then(nmsg => nmsg.edit(`${Random[kafasınasık]}`));
     var Random = [
      'https://media.tenor.com/images/79e94bdde6cb39a27b8cdefefa88b48a/tenor.gif',
      'https://media.tenor.com/images/2e44f34bd40a2e2c7eed4d2b82269755/tenor.gif',
    ];
    var kafasınasık = Math.floor(Math.random()*Random.length);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sahipol',
  description: 'İstediğiniz kişinin kafasına sıkar.',
  usage: 'sahipol'
};