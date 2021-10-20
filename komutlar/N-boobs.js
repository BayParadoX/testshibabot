const discord = require('discord.js');
const superagent = require("snekfetch");

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === false) {
    superagent.get('http://api.oboobs.ru/boobs/0/1/random')
    .query({ type: '4k'})
    .end((err, response) => {
    msg.channel.send({ files: [response.body.url] });
    });
  } else {
    msg.channel.send("**Bu Kanalda NSFW Aktif Değil ! Kanal Ayarlarından Aktifleştiriniz !** 🔞")
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ["meme","hentai-boobs"], 
  permLevel: 0 
};
exports.help = {
  name: 'boobs', 
  description: 'Sunucuda kullanıcıyı kayıt etmeye yarar.', 
  usage: 'boobs'
};