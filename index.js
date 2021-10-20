const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const ayarlar = require("./ayarlar.json");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path");
const snekfetch = require("snekfetch");
const request = require('request');
const DBL = require("dblapi.js");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "ShibaBOT");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


  client.elevation = message => {
    if (!message.guild) {
      return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
    if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 4;
    if (message.author.id === ayarlar.sahip) permlvl = 5;
    return permlvl;
  };

  var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
  client.on("debug", e => {
    console.log(chalk.bgBlue.green(e.replace(regToken, "that was redacted")));
  });

  client.on("warn", e => {
    console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
  });

  client.on("error", e => {
    console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
  });

  client.on('guildMemberAdd', async (member) => {
    try {
      var teyitci = db.fetch(`teyitci_${member.guild.id}`)
      var rol = `<@&${teyitci}>`
      var gelen = `<@${member.id}>`
      var rolMesaj = `→ ${rol} Rolündekiler Seninle En Kısa Zamanda İlgilenecek \n \n → Sunucumuza Boost basarak özel avantajların sahibi olabilirsin!`
      if(!teyitci) {
      var rol = ""
      var gelen = ""
      var rolMesaj2 = "→ Sunucumuza Boost basarak özel avantajların sahibi olabilirsin!"
      }
      var kanal = db.fetch(`hgbbkanali_${member.guild.id}`)
      if(!kanal) return;
      var tag = db.fetch(`tag_${member.guild.id}`)
      var tagMesaj = `→ Ayrıca Tagımızı Alarak Bize Destek Olabilirsin "${tag}"`
      if(!tag){
        var tag = ""
        var tagMesaj = ""
      }
        let viruskanal = member.guild.channels.cache.get(kanal)
      let virususer = client.users.cache.get(member.id);
      let viruskullanıcı = client.users.cache.get(member.id)
      const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
      let viruj;
      if (virushesapkurulus < 1296000000) viruj = ' Güvenli Değil!'
      if (virushesapkurulus > 1296000000) viruj = ' Güvenli!'
        const hgembed = new Discord.MessageEmbed()
        .setDescription(`

         → Aramıza Hoşgeldin **${virususer.username}** !

         → Seninle Birlikte **${member.guild.memberCount}** Kişiyiz

         ${rolMesaj}

         → İsmini Ve Yaşını Söyleyerek Kayıt Ol.

         → Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }

         → Hesabın Güvenlik Durumu: **${viruj}**

         ${tagMesaj}

        `)
        .setColor(0xff000)
        .setTitle("Aramıza Yeni Birisi Katıldı !")
        //.setTimestamp()
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
        .setFooter("Horizon Bot 2021 ©️",member.user.displayAvatarURL({dynamic: true}))
        viruskanal.send(`${rol} ${gelen}`, hgembed) ;
      } catch (e) {
    console.log(`Public Kayıt Hatası ${e}`)
     }
      })
    client.on('guildMemberRemove', async (member) => {
      try {
      var gelen = `<@${member.id}>`
      var kanal = db.fetch(`hgbbkanali_${member.guild.id}`)
      if(!kanal) return;
        var viruskanal = member.guild.channels.cache.get(kanal)
      let virususer = client.users.cache.get(member.id);
      let viruskullanıcı = client.users.cache.get(member.id)
      const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
      let viruj;
      if (virushesapkurulus < 1296000000) viruj = ' Güvenli Değildi...'
      if (virushesapkurulus > 1296000000) viruj = ' Güvenliydi'
        const hgembed = new Discord.MessageEmbed()
        .setDescription(`

         → **${virususer.username}** Aramızdan Ayrıldı :(

         → Sensiz **${member.guild.memberCount}** Kişiyiz

         → Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }

         → Hesabın Güvenlik Durumu: **${viruj}**

        `)
        .setColor(0xff0000)
        .setTitle("Birisi aramızdan ayrıldı :(")
        //.setTimestamp()
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
       .setFooter("Horizon Bot 2021 ©️",member.user.displayAvatarURL({dynamic: true}))
        viruskanal.send(hgembed) ;
      } catch (e) {
    console.log(`Public Kayıt Hatası 2 ${e}`)
     }
      })
/// OTOROL SİSTEMİ

client.on("guildMemberAdd", async member => {
  try{
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;

  if (!mesaj) {
    client.channels.cache
      .get(kanal)
      .send(
        ":inbox_tray:" +
          member.user.username +
          " **HoşGeldin! Otomatik Rolün Verildi Seninle Beraber** " +
          member.guild.memberCount +
          " **Kişiyiz!**"
      );
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj
      .replace("-uye-", `${member.user}`)
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.cache.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
  }
} catch (e) {
  console.log(`Otorol Hatası ${e}`)
   }
});

// OTOROL SON

// SAYAÇ SİSTEMİ

client.on("message", async message => {
  try{
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (
      db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size
    ) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(
          `Başarıyla \`${db.fetch(
            `sayac_${message.guild.id}`
          )}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`
        )
        .setColor(0xff0000);
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
} catch (e) {
  console.log(`Sayaç Hatası ${e}`)
   }
});
client.on("guildMemberRemove", async member => {
  try{
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

  member.guild.channels.cache
    .get(channel)
    .send(
      `:outbox_tray: **${member.user.tag} Sunucudan ayrıldı! \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı!**`
    );
  } catch (e) {
    console.log(`Sayaç Hatası 2 ${e}`)
     }
});
client.on("guildMemberAdd", async member => {
  try{
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

  member.guild.channels.cache
    .get(channel)
    .send(
      `:inbox_tray: **${member.user.tag} Sunucuya Katıldı \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı!**`
    );
  } catch (e) {
    console.log(`Sayaç Hatası 3 ${e}`)
     }
});

//SAYAÇ SON

//Reklam Engel Baş

const reklam = [
  ".com",
  ".net",
  ".xyz",
  ".tk",
  ".pw",
  ".io",
  ".me",
  ".gg",
  "www.",
  "https",
  "http",
  ".gl",
  ".org",
  ".com.tr",
  ".biz",
  "net",
  ".rf",
  ".gd",
  ".az",
  ".party",
  ".gf",
  ".31"
];
client.on("messageUpdate", async (old, nev) => {
  if (old.content != nev.content) {
    let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);
    if (i) {
      if (reklam.some(word => nev.content.includes(word))) {
        if (nev.member.hasPermission("BAN_MEMBERS")) return;
        //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
        const embed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(
            ` ${nev.author} , **Mesajını Editleyerek Reklam Yapmaya Çalıştı!**`
          )
          .addField("Mesajı:", nev);

        nev.delete();
        const embeds = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(
            ` ${nev.author} , **Mesajı Editleyerek Reklam Yapamana İzin Veremem!**`
          );
        client.channels.cache.get(y).send(embed);
        nev.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));
      }
    } else {
    }
    if (!i) return;
  }
});

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
  if (i) {
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
          msg.delete({ timeout: 750 });
          const embeds = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription(
              ` <@${msg.author.id}> , **Bu Sunucuda Reklam Yapmak Yasak!**`
            );
          msg.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));
          const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription(` ${msg.author} , **Reklam Yapmaya Çalıştı!**`)
            .addField("Mesajı:", msg);
          client.channels.cache.get(y).send(embed);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//Reklam Engel Son

//KüfürEngel Baş

const küfür = [
  "siktir",
  "yarak kafası",
  "yark kafalı",
  "fuck",
  "puşt",
  "pust",
  "piç",
  "sikerim",
  "sik",
  "yarra",
  "yarrak",
  "amcık",
  "orospu",
  "orosbu",
  "orosbucocu",
  "oç",
  ".oc",
  "ibne",
  "yavşak",
  "bitch",
  "dalyarak",
  "amk",
  "awk",
  "taşak",
  "taşşak",
  "daşşak",
  "sikm",
  "sikim",
  "sikmm",
  "skim",
  "skm",
  "sg"
];
client.on("messageUpdate", async (old, nev) => {
  if (old.content != nev.content) {
    let i = await db.fetch(`küfür.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`küfür.${nev.member.guild.id}.kanal`);
    if (i) {
      if (küfür.some(word => nev.content.includes(word))) {
        if (nev.member.hasPermission("BAN_MEMBERS")) return;
        //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
        const embed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(
            ` ${nev.author} , **Mesajını Editleyerek Küfür Etmeye Çalıştı!**`
          )
          .addField("Mesajı:", nev);

        nev.delete();
        const embeds = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(
            ` ${nev.author} , **Mesajı Editleyerek Küfür Etmene İzin Veremem!**`
          );
        client.channels.cache.get(y).send(embed);
        nev.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));
      }
    } else {
    }
    if (!i) return;
  }
});

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  let y = await db.fetch(`küfür.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`küfür.${msg.member.guild.id}.durum`);
  if (i) {
    if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
          msg.delete({ timeout: 750 });
          const embeds = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription(
              ` <@${msg.author.id}> , **Bu Sunucuda Küfür Yasak!**`
            );
          msg.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));
          const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription(` ${msg.author} , **Küfür etmeye çalıştı!**`)
            .addField("Mesajı:", msg);
          client.channels.cache.get(y).send(embed);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//KüfürEngel Son

client.on("message",message=>{
    if(message.content==`<@!${client.user.id}>`) return message.channel.send(`<a:siyahonay:859157722686554142> Tebrikler! ShibaBOT gizli komut listesini buldun şimdi şu komudu gir : **s!nNmhqipLqSLgy0d** <a:siyahonay:859157722686554142>`);
})

  client.login(ayarlar.token)
