const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async(yashinu, message, args) => {
  message.delete()
  let uye = message.mentions.users.first()
  if(!uye){
      if(!db.fetch(`para_${message.author.id}`)){
        db.set(`para_${message.author.id}`, 0)
      }
      let para = db.fetch(`para_${message.author.id}`)
      const param = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> **💰Hesabınızda ${para} TL bu kadar var**`)
      message.channel.send(param)
  }
  if(uye){
      if(!db.fetch(`para_${uye.id}`)){
        db.set(`para_${uye.id}`, 0)
      }
      let para = db.fetch(`para_${uye.id}`)
      const param = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${uye} **💰Hesabınızda ${para} TL bu kadar var**`)
      message.channel.send(param)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["money","cash","cüzdan","cuzdan","para","param","CÜZDAN", "PARA","PARAM"],
  permLevel: 0
};

exports.help = {
  name: 'param',
  description: '',
  usage: '',
};
