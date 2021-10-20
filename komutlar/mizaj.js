const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("31").then(message => {

    var Electron = [


      "https://cdn.glitch.com/86b48af8-57fb-4221-89ff-90ea4af75dcc%2Fmizaj.gif?v=1622716196316"

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
  name: "mizaj",
  description: "garip ölümler",
  usage: "mizaj"
};
