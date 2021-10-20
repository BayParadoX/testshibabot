const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let Electron = args.slice(0).join("+")
  if(!Electron)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://dynamic.brandcrowd.com/asset/logo/2fa9614c-e8fd-47be-b522-14aa07bd8f22/logo?v=4&text="+Electron
  const pixelien = new Discord.MessageEmbed()
  .setColor(0xF001FA)
  .setImage(link)
  message.channel.send(pixelien)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'normal-logo',
  description: 'Logo Yaparsınız',
  usage: 'normal-logo <yazı>'
};
