const Discord = require('discord.js')

exports.run = async (client ,message, args) =>{


  const embed = new Discord.MessageEmbed()
  .setTitle("Horizon Bot")
  .setTitle("Gecikme sürem")
  .setColor(0xff0000)
  .setFooter("ShibaBOT 2021 ©️",message.author.displayAvatarURL({dynamic: true}))
  //.setTimestamp()
  .setDescription(`📈 **__${client.ws.ping}__** ms olarak algılandı!🚀`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};

exports.help = {
 name: 'ping',
 description: 'Bot pingini gösterir',
 usage: 'ping'
};
