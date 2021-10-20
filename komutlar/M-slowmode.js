const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      " Bu komutu kullanabilmek için `Mesajları Yönet` yetkisine sahip olmanız gerek."
    );
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    var embed = new Discord.MessageEmbed()
      .setDescription(`Doğru kullanım: \`*yavaşmod [0/60]\``)
      .setColor(0xff0000)
      .setFooter("ShibaBOT 2021 ©️",message.author.displayAvatarURL({dynamic: true}))
      //.setTimestamp();
    message.channel.send({ embed });
    return;
  }
  if (limit > 1000) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Süre limiti maksimum **1000** saniye olabilir.")
        .setColor(0xff0000)
        .setFooter("ShibaBOT 2021 ©️",message.author.displayAvatarURL({dynamic: true}))
    );
  }
  message.channel.send(
    new Discord.MessageEmbed()
      .setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)
      .setColor(0xff0000)
      .setFooter("ShibaBOT 2021 ©️",message.author.displayAvatarURL({dynamic: true}))
  );
  var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "yavas-mod", "yavasmod", "yavaşmod","slowmode"],
  permLevel: 1
};

exports.help = {
  name: "Yavaş Mod",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "slowmode [0/1000]"
};
