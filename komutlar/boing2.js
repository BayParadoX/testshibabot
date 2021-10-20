//https://i0.nekobot.xyz/0/7/0/0584cfd8ffa47a0df5001932cc9c3.gif

const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const EmbedElectron = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**");

return message.author.send(EmbedElectron);

}
  if (message.channel.type !== "dm") {

const EmbedElectron = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " boing boing")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("https://i0.nekobot.xyz/7/3/7/8fcc8e93af301c06edc4566cd5868.gif");

return message.channel.send(EmbedElectron);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "boing2",
  description: "",
  usage: "boing2"
};
