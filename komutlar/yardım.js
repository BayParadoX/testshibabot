const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`ShibaBOT | Yardım Menüsü`)
    .setTitle(``)
    .setColor("#FF7F00")
    .setThumbnail("")
    .setImage("https://cdn.glitch.com/b5f5965e-2043-4076-9bca-c277c33b5616%2Fshibabanner.png?v=1624393514564")
    .setDescription(
      `**HEY! ShibaBOT'a yeni bir özellik geldi : gizli komutlar hadi bul bakalım komutları**`
    )
    .addField(
      `Nsfw Komutları`,
      `\`${prefix}nsfw\``,
      true
    )
    .addField(
      `Moderasyon Komutları`,
      `\`${prefix}moderasyon\` `,
      true
    )
    .addField(
      `Kullanıcı Komutları`,
      `\`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `Logo Oluşturucu Komutları`,
      `\`${prefix}logo\``,
      true
    )
    .addField(
      `Ekonomi Komutları`,
      `\`${prefix}ekonomi\``,
      true
    )
    .addField(
      `Eğlence Komutları`,
      `\`${prefix}eğlence\``,
      true
     );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};



exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
