const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("gizli komut").then(message => {

    var Electron = [


      "https://tenor.com/view/osman-seni%C3%A7izdim-he-yarrak-dalga-ge%C3%A7me-lise-esprileri-lise-gif-19054524"

    ];

    var Electron = Electron[Math.floor(Math.random() * Electron.length)];

    message.edit(`${Electron}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "aykute",
  description: "garip ölümler",
  usage: "aykute"
};
