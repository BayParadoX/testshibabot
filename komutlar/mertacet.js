const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("gizli komut").then(message => {

    var Electron = [


      "https://cdn.glitch.com/86b48af8-57fb-4221-89ff-90ea4af75dcc%2F51145dfb-495b-4c61-bd96-f2087606dafd.image.png?v=1622723353229",
      "Ben Hemçkır Olabilirim. Minecraft'da hile açtım dostum. Birdahaki yıl AyyıldızTim'de görüceksiniz cCc:wolf::flag_tr:"

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
  name: "mertacet",
  description: "garip ölümler",
  usage: "mertacet"
};
