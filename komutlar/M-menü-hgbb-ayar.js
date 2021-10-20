const Discord = require('discord.js');
const db = require('quick.db');
let prefix = "*"
exports.run = async(client, message, args) => {
if(!args[0]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız ** *hg-bb yardım**')
if(args[0] === "ayarla" || args[0] === "aç") {
if(!args[1]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız ** *hg-bb yardım**')
if(args[1] === "kanal") {
var kanal = message.mentions.channels.first();
if(!kanal) return message.reply('Bir kanal belirtiniz!')
db.set(`hgbbkanali_${message.guild.id}`, kanal.id)
return message.reply('Giriş kanalı başarıyla ayarlandı!')}
if(args[1] === "rol") {
var teyitci = message.mentions.roles.first();
if(!teyitci) return message.reply('Bir rol belirtiniz!')
db.set(`teyitci_${message.guild.id}`, teyitci.id)
return message.reply('Kayıt Görevlisi rolü başarıyla ayarlandı!')}
if(args[1] === "tag"){
var tag = args.slice(2).join(' ')
if(!tag) return message.reply("Tag'ınızı belirtin")
db.set(`tag_${message.guild.id}`, tag)
return message.reply('Tag başarıyla ayarlandı!')}}
if(args[0] === "kapat" || args[0] === "sıfırla"){
if(!args[1]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız ** *hg-bb yardım**')
if(args[1] === "kanal") {
db.delete(`hgbbkanali_${message.guild.id}`)
return message.reply('Giriş kanalı veritabanı sıfırlandı!')}
if(args[1] === "rol"){
db.delete(`teyitci_${message.guild.id}`)
return message.reply('Kayıt Görevlisi rolü başarıyla sıfırlandı!')}
if(args[1] === "tag"){
db.delete(`tag_${message.guild.id}`)
return message.reply('Tag veritabanı başarıyla sıfırlandı')}}
if(args[0] === "yardım" || args[0] === "help"){
const embedimsi = new Discord.MessageEmbed()
.setColor(0xff0000)
.setDescription(`**${client.user.username} Public Giriş-Çıkış Komutları**\n
<a:qwsdqw:783999991538122782> ${prefix}hg-bb yardım \`Yardım Menüsü\`
<a:qwsdqw:783999991538122782> ${prefix}hg-bb ayarla kanal #kanal \`Giriş çıkış kanalını ayarlar.\`
<a:qwsdqw:783999991538122782> ${prefix}hg-bb ayarla rol @rol \`Kayıt sorumlusu rolünü ayarlar.\`
<a:qwsdqw:783999991538122782> ${prefix}hg-bb ayarla tag <tagınız> \`Tag'ı ayarlar.\`
<a:qwsdqw:783999991538122782> ${prefix}hg-bb sıfırla kanal \`Giriş çıkış kanalını sıfırlar.\`
<a:qwsdqw:783999991538122782> ${prefix}hg-bb sıfırla rol \`Kayıt sorumlusu rolünü sıfırlar.\`
<a:qwsdqw:783999991538122782> ${prefix}hg-bb sıfırla tag \`Tag'ı sıfırlar.\`
`)
.addField(`ShibaBOT Bağlantıları`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=854049797278007366&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/j8fVRwQy6m) **|** [Oy Linki](yakında) `)
.setFooter("ShibaBOT 2021 ©️",message.author.displayAvatarURL({dynamic: true}))
//.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
//return message.channel.send(embed);
message.channel.send(embedimsi)}}
exports.conf = {aliases: ["hgbb","hg-bb"], permLevel: 4}
exports.help = {name: "hg-bb", description: "", usage: "hg-bb"}
