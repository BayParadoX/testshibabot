const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedeğlence = new Discord.MessageEmbed()
    .setAuthor(`ShibaBOT | Logo`)
    .setTitle(``)
    .setColor(`#ff0000`)
.setImage("https://cdn.glitch.com/b5f5965e-2043-4076-9bca-c277c33b5616%2Fshibabanner.png?v=1624393514564")
    .setDescription(
      `Logo Oluşturucu Menüsü`

    )
    .addField(
      `Alev Logosu`,
      `\`${prefix}alev-logo \`
Yazdığınız yazıyı Alev şeklinde logo oluşturur örnek kullanım : s!alev-logo yazı. `,
      true
    )
  .addField(
      `Google Logosu`,
      `\`${prefix}google-logo \`
Yazdığınız yazıyı Google şeklinde logo oluşturur örnek kullanım : s!google-logo yazı.`,
      true
    )
   .addField(
      `Kurt Logosu`,
      `\`${prefix}kurt-logo \`
Yazdığınız yazıyı Kurt şeklinde logo oluşturur örnek kullanım : s!kurt-logo yazı.`,
      true
    )
   .addField(
      `Neon Logosu`,
      `\`${prefix}neon-logo \`
Yazdığınız yazıyı Neon şeklinde logo oluşturur örnek kullanım : s!neon-logo yazı.`,
      true
    )
  .addField(
      `Normal Logo`,
      `\`${prefix}normal-logo \`
Yazdığınız yazıyı Normal şeklinde logo oluşturur örnek kullanım : s!normal-logo yazı`,
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
  name: "logo",
  description: "Eğlence Menüsü",
  usage: "logo"
};
