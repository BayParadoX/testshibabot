exports.run = (client, message) => {
  let db = require("quick.db");
  let Discord = require("discord.js");

  let küfür = db.fetch(`küfür.${message.guild.id}.durum`);
  const member3 = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`**HATA**  - Bu sunucuda yetkili değilsin.`);
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(member3);
  if (küfür) {
    db.delete(`küfür.${message.guild.id}`);
    message.channel
      .send(
        new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(
            `**Başarılı Bir Şekilde KüfürEngel Koruması Kapatıldı**`
          )
      )
      .then(l => {
        l.delete({ timeout: 5000 });
      });
  } else {
    db.set(`küfür.${message.guild.id}.durum`, true);
    message.channel
      .send(
       new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`**Başarılı Bir Şekilde KüfürEngel Koruma Açıldı**`)
      )
      .then(l => {
        l.delete({ timeout: 5000 });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür-engel"],
  permLevel: 4
};

exports.help = {
  name: "küfürengel",
  description: "asreaper",
  usage: "küfürengel"
};
