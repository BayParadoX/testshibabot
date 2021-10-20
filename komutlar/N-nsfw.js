const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`ShibaBOT | NSFW`)
    .setTitle(``)
    .setColor("#ff0000")
    .setImage("https://cdn.glitch.com/b5f5965e-2043-4076-9bca-c277c33b5616%2Fshibabanner.png?v=1624393514564")
    .setDescription(
      `NSFW Komutları.`
    )
    .addField(
      `Porno gif`,
      `\`${prefix}pgif\` Porno gifleri atar.`,
     true
    )
    .addField(
      `Am Resimleri`,
      `\`${prefix}pussy\`
Amcık resimleri atar.`,
      true
    )
    .addField(
      `Göt Resimleri`,
      `\`${prefix}ass\`
Göt fotoğrafları atar.`,
      true
    )
   .addField(
      `Anal Porno Gif`,
      `\`${prefix}anal\`
Götten sokmalı porno gifleri.`,
      true
    )
   .addField(
      `Hentai`,
      `\`${prefix}hentai\` +18 Hentai fotoğrafları atar.`,
      true
    )
   .addField(
       `İç çamaşırı`,
       `\`${prefix}thigh\` don sütyen gibi fetişi olanlar için 10 numara komut.`,
       true
     )
   .addField(
         `Çıplak fotoğraflar`,
         `\`${prefix}nude\` nude fotoğrafları atar.`,
         true
       )
     .addField(
      `Meme fotoğrafları`,
      `\`${prefix}boobs\` Meme fotoğrafları atar.`,
      true
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "nsfw",
  description: "Genel Menüsü",
  usage: "nsfw"
};
