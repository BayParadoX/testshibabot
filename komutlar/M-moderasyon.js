const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`ShibaBOT | Moderasyon`)
    .setTitle(``)
    .setColor("#ff0000")
    .setImage(
      "https://cdn.glitch.com/b5f5965e-2043-4076-9bca-c277c33b5616%2Fshibabanner.png?v=1624393514564"
    )
    .setDescription(
      `Moderasyon Menüsü.`
    )
    .addField(
      `Gelen-Giden`,
      `\`${prefix}hg-bb\` Discord sunucunuza gelen kişileri gösterir.`,
      true
    )
    .addField(
      `OtoRol`,
      `\`${prefix}otorol\` Sunucuna gelenlere otomatik rol verir.`,
      true
    )
    .addField(
      `Sayaç Sistemi`,
      `\`${prefix}sayaç-ayarla\` sunucunuzda üye sayacı açarsınız`,
      true
    )
    .addField(
      `Yavaş Mod`,
      `\`${prefix}slowmode\` Sunucudaki odalara mesaj atma süresini ayarlar.`,
      true
    )
    .addField(
      `Reklam Log`,
      `\`${prefix}reklamlog\` Sunucunuzda Reklam Mesajları Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `Reklam Engel`,
      `\`${prefix}reklamengel\` Sunucunuzdaki reklam engeli aktif eder.`,
      true
    )
    .addField(
      `Küfür Log`,
      `\`${prefix}küfürlog\` Sunucunuzda küfür Mesajları Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `Küfür Engel`,
      `\`${prefix}küfürengel\` Sunucunuzdaki küfür engeli aktif eder.`,
      true
    )
    .addField(
      `Sohbet Aç`,
      `\`${prefix}sohbet-aç\` Komutu Kullandıgınız Kanalda Sohbeti Açar.`,
      true
    )
    .addField(
      `Sohbet Kapat`,
      `\`${prefix}sohbet-kapat\` Komutu Kullandıgınız Kanalda Sohbeti Kapat.`,
      true
    )
    .addField(
      `Çekiliş`,
      `\`${prefix}çekiliş\` Sunucunuzda çekiliş yapar.`,
      true
    )
    .addField(
      `Sil`,
      `\`${prefix}sil\`
Yazdıgınız
Mesajları Siler.`,
      true
    )
    .addField(
      `Hazır Kural`,
      `\`${prefix}kurallar\`
Sunucunuzda
kural yazmaya üşeniyorsanız
bu komut sizin için ideal`,
      true
    )
    .addField(
      `Mute(yakında)`,
      `\`${prefix}mute\`
Sunucunuzda İstediğiniz
kişiyi Susturursunz.`,
      true
    )
    .addField(
      `Bağlantılar`,
      `**[TIKLA](https://discord.com/api/oauth2/authorize?client_id=854049797278007366&permissions=8&scope=bot)** | Botumu Sununuya Davet Etmek İçin Linke Tıkla.\n **[TIKLA](https://discord.gg/j8fVRwQy6m)** |  Destek Sunucum.`
    );
  return message.channel.send(embedayarlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "Ayarlar Menüsü",
  usage: "moderasyon"
};
