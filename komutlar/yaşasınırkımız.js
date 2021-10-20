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

      .setAuthor(message.author.username + " VATAN KURTARILDI CCC!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("https://cdn.glitch.com/86b48af8-57fb-4221-89ff-90ea4af75dcc%2FCcC.gif?v=1622114559367");

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
  name: "ccc",
  description: "matador",
  usage: "ccc"
};
