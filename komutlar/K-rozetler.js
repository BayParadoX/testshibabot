const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let kişi =
    message.mentions.users.first() || client.users.cache.get(args.join(" "));
  if (!args[0]) {
    const emmbed = new Discord.MessageEmbed();
    emmbed
      .setTitle("Rozetlerin")
      .setColor("#ff0000");
    emmbed.setDescription(
      message.author.flags.toArray().join("\n")
        ? message.author.flags
            .toArray()
            .join("\n")
            .replace("HOUSE_BRAVERY", "<:Bravery:840558415796371457> Bravery")
            .replace("HOUSE_BRILLIANCE", "<:Brilliance:840558415943958539> Brilliance")
            .replace("HOUSE_BALANCE", "<:Balance:840558415796371466> Balance")
            .replace("VERIFIED_DEVELOPER", "Onaylı İlk Türk Developer")
            .replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
            .replace("DISCORD_PARTNER", "<a:Anxie_13:840172578517942272> Partner")
            .replace("HYPESQUAD_EVENTS", "Events Rozeti")
            .replace("BUGHUNTER_LEVEL_1", "Bug Avcısı LvL 1")
            .replace("EARLY_SUPPORTER", "Erken Dönem Destekcisi")
            .replace("TEAM_USER", "Takım Üyesi")
            .replace("SYSTEM", "Sistem")
            .replace("BUGHUNTER_LEVEL_2", "Bug Avcısı LvL 2")
            .replace("VERIFIED_BOT", "Onaylı Bot")
        : `**Yok**`
    );
    message.reply(emmbed);
  }
  if (kişi) {
    const emmbed = new Discord.MessageEmbed();
    emmbed.setTitle("Rozetlerin");
    emmbed.setColor("#ff0000");
    emmbed.setDescription(
      kişi.flags.toArray().join("\n")
        ? kişi.flags
            .toArray()
            .join("\n")
            .replace("HOUSE_BRAVERY", "Bravery")
            .replace("HOUSE_BRILLIANCE", "Brilliance")
            .replace("HOUSE_BALANCE", "Balance")
            .replace("VERIFIED_DEVELOPER", "Onaylı İlk Türk Developer")
            .replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
            .replace("DISCORD_PARTNER", "Partner")
            .replace("HYPESQUAD_EVENTS", "Events Rozeti")
            .replace("BUGHUNTER_LEVEL_1", "Bug avcısı LvL 1")
            .replace("EARLY_SUPPORTER", "Erken Dönem Destekcisi")
            .replace("TEAM_USER", "Takım Üyesi")
            .replace("SYSTEM", "Sistem")
            .replace("BUGHUNTER_LEVEL_2", "Bug Avcısı LvL 2")
            .replace("VERIFIED_BOT", "Onaylı Bot")
        : `**Yok**`
    );
    message.reply(emmbed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rozetler"],
  permLevel: 0
};

exports.help = {
  name: "rozetler",
  description: "!rozet  veya !bayrak",
  usage: "rozetler"
};
