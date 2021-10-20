const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedeğlence = new Discord.MessageEmbed()
    .setAuthor(`ShibaBOT | Ekonomi`)
    .setTitle(``)
    .setColor(`#ff0000`)
.setImage("https://cdn.glitch.com/b5f5965e-2043-4076-9bca-c277c33b5616%2Fshibabanner.png?v=1624393514564")
    .setDescription(
      `Ekonomi Menüsü.`
    )
    .addField(
      `Ekonomi Marketi`,
      `\`${prefix}market \` Araba, Arazi vb. şeyler satın alırsınız`,
      true
    )
    .addField(
      `Satın al`,
      `\`${prefix}satın-al \`
marketteki her hangi bir şey alırken kullanılır`,
      true
    )
    .addField(
      `Paranız`,
      `\`${prefix}param \`
Hesabınızdaki toplam para miktarını gösterir`,
      true
    )
    .addField(
      `Hesabınız`,
      ` \`${prefix}hesap \` Hesap işlemlerini gösterir`,
      true
    )
    .addField(
      `Bahis oyna`,
      `\`${prefix}bahis \`
Bahis oynayarak para kazanın ve yeni şeyler alın`,
      true
    )
  .addField(
      `İtemleriniz`,
      `\`${prefix}envanter \`
Sahip olduğunuz şeyleri gösterir`,
      true

    );
  return message.channel.send(embedeğlence);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ekonomi",
  description: "Eğlence Menüsü",
  usage: "ekonomi"
};
