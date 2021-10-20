const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`ShibaBOT | Çekiliş `)
    .setTitle(``)
    .setColor("#ff0000")
    .setThumbnail(
      ""
    )
    .setDescription(
      `Çekiliş Menüsü.`
    )
    .addField(
      `Başlat`,
      `\`a!çbaşlat\` Sunucudan Bir Çekiliş Başlatabilirsin.`,
      true
    )
   .addField(
      `Yenile`,
      `\`a!çyenile\` Çekilişi Yeniden Çeker.`,
      true
    )
    .addField(
      `Sonlandır`,
      `\`a!çbitir\` Çekilişi Bitir.`,
      true

    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "çekiliş",
  description: "Çekiliş Menüsü",
  usage: "çekiliş"
};
