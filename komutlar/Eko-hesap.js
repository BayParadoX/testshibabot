const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")

exports.run = async (client, message, args) => {
    let ferrari;
    let porche;
    let bmw;
    let mercedes;
    let audi;
    let karambit;
    let lamborghini;
    let royce;
    let glock;
    let deserteagle;
    let dualberetta;
    let p90;
    let butterfly;
    let bayonet;
    let shadowdaggers;
    let nova;
    let mag7;
    let ump45;
    let m4a4;
    let awp;
    let scar20;
    let ak47;
    let tabancamermisi;
    let agirsilahmermisi;
    let hafifmakinelisilahmermisi;
    let tufekmermisi;
    let denizev;
    let siginak;
    let villa;
    let ada;
    if(db.fetch(`ada_${message.author.id}`)){ada=db.fetch(`ada_${message.author.id}`)} else {ada = "Bulunmuyor"}
    if(db.fetch(`villaev_${message.author.id}`)){villa=db.fetch(`villaev_${message.author.id}`)} else {villa = "Bulunmuyor"}
    if(db.fetch(`siginakev_${message.author.id}`)){siginak=db.fetch(`siginakev_${message.author.id}`)} else {siginak = "Bulunmuyor"}
    if(db.fetch(`denizev_${message.author.id}`)){denizev=db.fetch(`denizev_${message.author.id}`)} else {denizev = "Bulunmuyor"}
    if(db.fetch(`tabancamermisi_${message.author.id}`)){tabancamermisi=db.fetch(`tabancamermisi_${message.author.id}`)} else {tabancamermisi = "Bulunmuyor"}
    if(db.fetch(`agirsilahmermisi_${message.author.id}`)){agirsilahmermisi=db.fetch(`agirsilahmermisi_${message.author.id}`)} else {agirsilahmermisi = "Bulunmuyor"}
    if(db.fetch(`hafifmakinelisilahmermisi_${message.author.id}`)){hafifmakinelisilahmermisi=db.fetch(`hafifmakinelisilahmermisi_${message.author.id}`)} else {hafifmakinelisilahmermisi = "Bulunmuyor"}
    if(db.fetch(`tufekmermisi_${message.author.id}`)){tufekmermisi=db.fetch(`tufekmermisi_${message.author.id}`)} else {tufekmermisi = "Bulunmuyor"}
    if(db.fetch(`shadowdaggers_${message.author.id}`)){shadowdaggers=db.fetch(`shadowdaggers_${message.author.id}`)} else {shadowdaggers = "Bulunmuyor"}
    if(db.fetch(`scar20_${message.author.id}`)){scar20=db.fetch(`scar20_${message.author.id}`)} else {scar20 = "Bulunmuyor"}
    if(db.fetch(`ak47_${message.author.id}`)){ak47=db.fetch(`ak47_${message.author.id}`)} else {ak47 = "Bulunmuyor"}
    if(db.fetch(`m4a4_${message.author.id}`)){m4a4=db.fetch(`m4a4_${message.author.id}`)} else {m4a4 = "Bulunmuyor"}
    if(db.fetch(`awp_${message.author.id}`)){awp=db.fetch(`awp_${message.author.id}`)} else {awp = "Bulunmuyor"}
    if(db.fetch(`deserteagle_${message.author.id}`)){deserteagle=db.fetch(`deserteagle_${message.author.id}`)} else {deserteagle = "Bulunmuyor"}
    if(db.fetch(`karambit_${message.author.id}`)){karambit=db.fetch(`karambit_${message.author.id}`)} else {karambit = "Bulunmuyor"}
    if(db.fetch(`butterfly_${message.author.id}`)){butterfly=db.fetch(`butterfly_${message.author.id}`)} else {butterfly = "Bulunmuyor"}
    if(db.fetch(`bayonet_${message.author.id}`)){bayonet=db.fetch(`bayonet_${message.author.id}`)} else {bayonet = "Bulunmuyor"}
    if(db.fetch(`p90_${message.author.id}`)){p90=db.fetch(`p90_${message.author.id}`)} else {p90 = "Bulunmuyor"}
    if(db.fetch(`nova_${message.author.id}`)){nova=db.fetch(`nova_${message.author.id}`)} else {nova = "Bulunmuyor"}
    if(db.fetch(`mag7_${message.author.id}`)){mag7=db.fetch(`mag7_${message.author.id}`)} else {mag7 = "Bulunmuyor"}
    if(db.fetch(`ump45_${message.author.id}`)){ump45=db.fetch(`ump45_${message.author.id}`)} else {ump45 = "Bulunmuyor"}
    if(db.fetch(`dualberetta_${message.author.id}`)){dualberetta=db.fetch(`dualberetta_${message.author.id}`)} else {dualberetta = "Bulunmuyor"}
    if(db.fetch(`glock_${message.author.id}`)){glock=db.fetch(`glock_${message.author.id}`)} else {glock = "Bulunmuyor"}
    if(db.fetch(`ferrari_${message.author.id}`)){ferrari=db.fetch(`ferrari_${message.author.id}`)} else {ferrari = "Bulunmuyor"}
    if(db.fetch(`bmw_${message.author.id}`)){bmw=db.fetch(`bmw_${message.author.id}`)} else {bmw = "Bulunmuyor"}
    if(db.fetch(`mercedes_${message.author.id}`)){mercedes=db.fetch(`mercedes_${message.author.id}`)} else {mercedes = "Bulunmuyor"}
    if(db.fetch(`audi_${message.author.id}`)){audi=db.fetch(`audi_${message.author.id}`)} else {audi = "Bulunmuyor"}
    if(db.fetch(`porche_${message.author.id}`)){porche=db.fetch(`porche_${message.author.id}`)} else {porche = "Bulunmuyor"}
    if(db.fetch(`sahin_${message.author.id}`)){royce=db.fetch(`sahin_${message.author.id}`)} else {royce = "Bulunmuyor"}
    if(db.fetch(`lamborghini_${message.author.id}`)){lamborghini=db.fetch(`lamborghini_${message.author.id}`)} else {lamborghini = "Bulunmuyor"}
    let d = new Date();
    switch(args[0]){
      default:
          message.channel.send(new Discord.MessageEmbed().setDescription("Bir işlem belirt!\n**__İşlemler__** `s!hesap bilgi` `s!hesap aç` `s!hesap kapat` `s!hesap envanter`"))
          break;
      case "bilgi":
      case "info":
          if(!db.fetch(`hesap_${message.author.id}`)){
              message.channel.send(new Discord.MessageEmbed().setDescription("Bir hesabınız bulunmuyor! `s!hesap aç` yazarak hesabınızı oluşturabilirsiniz."))
              return;
          }
          if(db.fetch(`hesap_${message.author.id}`)){
              message.channel.send(new Discord.MessageEmbed().setDescription(`**__Hesap bilgileriniz__**\n:moneybag:  Paranız: **${db.fetch(`para_${message.author.id}`)}**\n:moneybag: Hesabın oluşturulduğu tarih: **${db.fetch(`hesapolusturuldu_${message.author.id}`)}**\n:moneybag: Envanterinize bakmak için \`s!hesap envanter\``))
              return;
          }
          break;
      case "ac":
      case "aç":
      case "oluştur":
      case "olustur":
          if(db.fetch(`hesap_${message.author.id}`)){
              message.channel.send(new Discord.MessageEmbed().setDescription(`Zaten bir hesabın mevcut.\`s!hesap bilgi\` yazarak hesabına bakabilirsin`))
              return;
          }
          if(!db.fetch(`hesap_${message.author.id}`)){
              message.channel.send(new Discord.MessageEmbed().setDescription("Hesabınız oluşturuldu.Bakmak için `s!hesap bilgi`"))
              db.set(`hesap_${message.author.id}`, true)
              db.set(`para_${message.author.id}`, 1000)
              db.set(`hesapolusturuldu_${message.author.id}`, d.getDate() +"."+ (d.getMonth()+1) +"."+ d.getFullYear())
              return;
          }
          break;
      case "sifirla":
      case "sıfırla":
      case "kapat":
          if(db.fetch(`hesap_${message.author.id}`)){
              db.delete(`hesap_${message.author.id}`)
              db.delete(`para_${message.author.id}`)
              db.delete(`hesapolusturuldu_${message.author.id}`)
              message.channel.send(new Discord.MessageEmbed().setDescription(`Hesabınız başarılı bir şekilde sıfırlandı!`))
              return;
          }
          if(!db.fetch(`hesap_${message.author.id}`)){
              message.channel.send(new Discord.MessageEmbed().setDescription("Zaten bir hesabınız mevcut değil.Oluşturmak için `s!hesap aç`"))
              return;
          }
          break;
      case "envanter":
          message.channel.send(new Discord.MessageEmbed().setTitle("Envanteriniz").addFields(
{name: "**----------------------__Arabalarınız__----------------------**", value: `
> **Mercedes** : ${mercedes}
> **BMW** : ${bmw}
> **Audi** : ${audi}
> **Ferrari** : ${ferrari}
> **Lamborghini** : ${lamborghini}
> **Şahin** : ${royce}
`, inline:false},
{name: "**----------------------__Silahlarınız__----------------------**", value: `
> **Glock** : ${glock}
> **Desert Eagle** : ${deserteagle}
> **Dual Beretta** : ${dualberetta}
> **Nova** : ${nova}
> **Mag-7** : ${mag7}
> **P90** : ${p90}
> **UMP-45** : ${ump45}
> **M4A4** : ${m4a4}
> **AK-47** : ${ak47}
> **AWP** : ${awp}
> **SCAR-20** : ${scar20}
> **Bayonet** : ${bayonet}
> **Karambit** : ${karambit}
> **Kelebek** : ${butterfly}
> **Shadow Daggers** : ${shadowdaggers}
`, inline:false},
{name: "**----------------------__Cephaneniz__----------------------**", value: `
> **Tabanca Mermisi** : ${tabancamermisi}
> **Ağır Silah Mermisi** : ${agirsilahmermisi}
> **Hafif Makineli Silah Mermisi** : ${hafifmakinelisilahmermisi}
> **Tüfek Mermisi** : ${tufekmermisi}
`, inline:false},
{name: "**----------------------__Arazileriniz__----------------------**", value: `
> **Deniz Manzaralı Ev** : ${denizev}
> **Sığınak** : ${siginak}
> **Villa** : ${villa}
> **Ada** : ${ada}
`, inline:false}))
          break;
    }
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["account"],
  permLevel: 0
};

exports.help = {
  name: 'hesap',
  description: 'hesap',
  usage: 'hesap'
};
//Cyrex
