const  Discord = require("discord.js");

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor(0xff0000)
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[**Davet Et**](https://discord.com/api/oauth2/authorize?client_id=854049797278007366&permissions=8&scope=bot) \n [**Destek Sunucusu**](https://discord.gg/j8fVRwQy6m)")
  .setFooter("ShibaBOT 2021 ©️",message.author.displayAvatarURL({dynamic: true}))
 //.setTimestamp()
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet","davetet"],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
