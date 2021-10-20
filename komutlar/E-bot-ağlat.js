const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const Electron = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(Electron);
  }
  if (message.channel.type !== "dm") {
    const Electron = new Discord.MessageEmbed()
      .setAuthor("Botu Ağlattın mutlumusun?")
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setImage(
        `https://media3.giphy.com/media/2rtQMJvhzOnRe/giphy.gif?cid=790b76115d398a482f6177556b32d70a&rid=giphy.gif`
      );
    return message.channel.send(Electron);
  }

  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ağlat",
  description: "Bot U Ağlatırsınız",
  usage: "ağlat"
};
