const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (bot, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }

  message.delete();

const CrewCode = new Discord.MessageEmbed()

    .setColor(0xff0000)
    .setDescription(
      `Sunucunun kurucusu: <@${message.guild.owner.id}>`
    )
    .setFooter("ShibaBOT 2021 ©️",message.author.displayAvatarURL({dynamic: true}))
return message.channel.send(CrewCode).then(m => m.delete({timeout: 10000}));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucu','tac','sahip',"taç"],
  permLevel: 0
};

exports.help = {
  name: "taç",
  description: "",
  usage: ""
};
