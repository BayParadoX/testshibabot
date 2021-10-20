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

      .setAuthor(message.author.username + " Niye şaşırdın dostum?")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("https://media1.tenor.com/images/db16357218d33af1cde8ff5e4d9933ac/tenor.gif");

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
  name: "şaşır",
  description: "matador",
  usage: "şaşır"
};
