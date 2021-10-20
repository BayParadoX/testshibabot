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
      .setImage("https://cdn.boob.bot/boobs/8001837F.gif");

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
  name: "boing4",
  description: "",
  usage: "boing4"
};
