const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedkullanıcı = new Discord.MessageEmbed()
    .setAuthor(`ShibaBOT | Kullanıcı`)
    .setTitle(``)
    .setColor("#ff0000")
    .setImage(
      "https://cdn.glitch.com/b5f5965e-2043-4076-9bca-c277c33b5616%2Fshibabanner.png?v=1624393514564"
    )
    .setDescription(
      `Kullanıcı Menüsü.`
    )
    .addField(
      `Rozetler`,
      `\`${prefix}rozetler\`
ShibaBOT Discordda
Aldıgınız Rozetleri
Komutla Gösterir.`,
      true
    )
    .addField(
      `Avatarım`,
      `\`${prefix}avatar\`
ShibaBOT Size
Avatarınızı Gösterir.`,
      true
    )
    .addField(
      `sunucu sahibi`,
      `\`${prefix}taç\`
ShibaBOT Size
Sunucu sahibini
gösterir çko hawli 😎.`,
      true
    )
    .addField(
      `Yetkiler`,
      `\`${prefix}yetkilerim\` Sunucudaki yetkilerinizi gösterir.`,
      true
    )
    .addField(
      `Davet Et`,
      ` \`${prefix}davet\` ShibaBOT'u davet et.`,
      true
    );
  return message.channel.send(embedkullanıcı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "kullanıcı Menüsü",
  usage: "kullanıcı"
};
