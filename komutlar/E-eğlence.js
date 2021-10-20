const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedeğlence = new Discord.MessageEmbed()
    .setAuthor(`ShibaBOT | Eğlence`)
    .setTitle(``)
    .setColor(`#ff0000`)
.setImage("https://cdn.glitch.com/b5f5965e-2043-4076-9bca-c277c33b5616%2Fshibabanner.png?v=1624393514564")
    .setDescription(
      `Eğlence Menüsü.`
    )
    .addField(
      `8 BALL`,
      `\`${prefix}8ball \`
      Bota soru sor sana cevap versin.`,
      true
    )
    .addField(
      `En Acayip Ölümler`,
      `\`${prefix}absürt-ölüm \` En acı verici ve absürt ölümler (lütfen denemeyin götleklik yapmayın).`,
      true
    )
    .addField(
      `Adam Asmaca`,
      `\`${prefix}adam-asmaca \`
Botla Adam Asmaca eğlenceli olurdu.`,
      true
    )
    .addField(
      `Kasa Aç`,
      `\`${prefix}kasaaç \`
CS:GO Kasası Açar.`,
      true
    )
    .addField(
      `Trump Tweet`,
      ` \`${prefix}trump \` Trump'a Yazı Yazdırırsın.`,
      true
    )
    .addField(
      `Polis Geliyeh`,
      `\`${prefix}ara155 \`
Polisten Gaçın.`,
      true
    )
  .addField(
      `Deste Aç`,
      `\`${prefix}desteaç \`
Zula Deste Kasası Açar.`,
      true
    )
   .addField(
      `Balıkçılık`,
      `\`${prefix}balıktut \`
Balık tutma vakti geldi!`,
      true
    )
   .addField(
      `Boğazla`,
      `\`${prefix}boğazla \`
BOT etiketlediğin kişiyi boğazlar.`,
      true
    )
  .addField(
      `Boks Makinası`,
      `\`${prefix}boks \`
Bakalım ne kadar güçlüsün.`,
      true
    )
  .addField(
      `Botu Ağlat`,
      `\`${prefix}ağlat \`
Cidden botu ağlatacak kadar vicdansızmısın?.`,
      true
        )
  .addField(
      `Change my Mind`,
      `\`${prefix}cmm \`
BOT Change my mind memes atar örnek kullanım : s!cmm yazı`,
      true
            )
  .addField(
      `1v1 Savaş`,
      `\`${prefix}düello \`
Etiketlediğin kişi ile 1v1 savaşırsın.`,
      true
    )
  .addField(
        `Soğuk Espri`,
        `\`${prefix}espri \`
  Bottan bok gibi soğuk espiri.`,
        true
      )
  .addField(
          `Gaymısın?`,
          `\`${prefix}gay \`
    Gay testi yaptırmak lazım.`,
          true
        )
  .addField(
            `İlginç bilgi`,
            `\`${prefix}ilginç-bilgi \`
      Dünyadaki en acayip bilgiler.`,
            true
          )
  .addField(
            `Kaç santim penis`,
            `\`${prefix}kaçcm \`
      Malafat boyu ölçer.`,
            true
          )
  .addField(
            `Kimlik Oluştur`,
            `\`${prefix}kimlik \`
      Sizin için rastgele kimlik oluşturur (tc no rastgele yazılmıştır)`,
           true
          )
  .addField(
            `Minecraft Başarıların`,
            `\`${prefix}mcbaşarım \`
      Bir mesaj yazın ve minecraft başarısı olarak kazanın örnek : s!mcbaşarım ShibaBOT`,
           true
          )
  .addField(
            `Steam Oyunları (bakım)`,
            `\`${prefix}steam \`
      Bir steam oyunu yazın ve size oyun hakkında bilgi versin örnek : s!steam ets2`,
           true
          )
  .addField(
            `BOT sahibi sen ol`,
            `\`${prefix}sahipol \`
      Eğer ShibaBOT'un sahibi olup komut dosyalarını istiyorsan bu komutu yaz botun tokeni fln var dosyada`,
           true
          )
  .addField(
            `Neden Şaşırdın?`,
            `\`${prefix}şaşır \`
      Niye şaşırdın açıkta bişeymi var?`,
           true
          )
.addField(
            `Ananı babanı...`,
            `\`${prefix}söv \`
      Etiketlediğin birine ana avrat soy sop söver`,
           true
          )

  .addField(
      `Emoji şeklinde yazı`,
      `\`${prefix}emoji-yazı \`
Bu komutu kullanarak yazılarınızı emoji şeklinde yazdırın örnek kullanım : s!emoji-yazı Shiba`,
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
  name: "eğlence",
  description: "Eğlence Menüsü",
  usage: "eğlence"
};
