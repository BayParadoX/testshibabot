const Discord = require("discord.js");

exports.run = (client, message, args) => {

let Electron = args.slice(0).join("+");
if (!Electron) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/bde18799-18b9-451c-b78b-9a5694dcabd7/logo?v=4&text=" + Electron;

const EmbedElectron = new Discord.MessageEmbed()

.setImage(link);

return message.channel.send(EmbedElectron);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kurt-logo",
  description: "Ejderha Logosu Yaparsınız",
  usage: "kurt <yazı>"
};
