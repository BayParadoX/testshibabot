const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  //console.log(`                                                                                                                                                                     `)
//client.user.setActivity(`| ${client.guilds.cache.size} sunucu | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı`, { type: "WATCHING",});  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR
 //console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
var oynuyorkısmı = [
//`*kyardım | *koruma`,
`s!yardım | s!davet 🔥`,
//`Database sıfırlandı ayarları baştan yapın...`,
`Çok yakında 7/24 🔥`,
//`🔥Hata düzeltmeleri ve güncellemelerden haberdar olmak için botun sunucusuna gelin *davet🔥`,
//`V11 Kodlarınızı V12 yapmak için *çevir`,
 //`Kesintiler yaşanabilir...`,
 //`Bot Güncelleniyor...`,
  //`*dc aktif (Beta)`,
  //`Glitch kaynaklı hata yüzünden bot ekleme botumuz bir süre afk`,
  //`Güncellemelerden haberdar olmak için *güncel`,
//`Destek sunucusuna gelen ilk 50 kişiye gold üye`,
 `ShibaBOT | V12🔥`, 
`| ${client.guilds.cache.size} sunucu | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı |`,
//`${client.guilds.size} sunucumuza, ${client.users.size} `
];
setInterval(function() {
//sürekli tekrarlanacak bölüm
// 6000 milisaniye yani 6 saniyede bir gerçekleşecek eylem
    var random = Math.floor(Math.random()*(oynuyorkısmı.length-0+1)+0);
   client.user.setActivity(oynuyorkısmı[random], { type: 'WATCHING' });
    }, 2 * 3000);
}
