const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
  if(!args[0]){
        let yardim = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Market")
        .setImage("")
        .addFields(
            {
              name: `**__Arabalar__**`,
              value: `:red_car: Arabalar kategorisine bakmak için \n\`s!market arabalar\``,
              inline: true
            },
            { name: '\u200B', value: '\u200B', inline: true },
            {
              name: `**__Silahlar__**`,
              value: `:gun: Silahlar kategorisine bakmak için \n\`s!market silahlar\`` ,
              inline: true
            },
            {
              name: `**__Cephane__**`,
              value: `:gear: Cephane kategorisine \nbakmak için \n\`s!market cephane\`` ,
              inline: true
            },
            { name: '\u200B', value: '\u200B', inline: true },
            {
              name: `**__Arazi__**`,
              value: `:park: Arazi kategorisine bakmak için \n\`s!market arazi\`` ,
              inline: true
            },
        )
        message.channel.send(yardim)
        return;
  }
  if(args[0]=="arabalar" || args[0]=="araba" || args[0]=="car" || args[0]=="cars"){
        let yardim = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Arabalar Market")
        .addField(`**----------------------__Arabalar__----------------------**`,`
> **__Ferrari__** \`s!satın-al ferrari\` Fiyat: **80.000 $**
> **__Porche__** \`s!satın-al porche\` Fiyat: **75.000 $**
> **__Mercedes__** \`s!satın-al mercedes\` Fiyat: **40.000 $**
> **__Audi__** \`s!satın-al audi\` Fiyat: **30.000 $**
> **__BMW__** \`s!satın-al bmw\` Fiyat: **40.000 $**
> **__Lamborghini__** \`s!satın-al lamborghini\` Fiyat: **75.000 $**
> **__Şahin__** \`s!satın-al sahin\` Fiyat: **25.000 $**
`)
        message.channel.send(yardim)
        return;
  }
  if(args[0]=="silahlar" || args[0]=="silah" || args[0]=="guns" || args[0]=="gun" || args[0]=="bicak" || args[0]=="bicaklar" || args[0]=="bıcak" || args[0]=="bıcaklar" || args[0]=="knife"){
        let yardim = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Silahlar Market")
        .addFields(
          {
            name: "**----------------------__Tabancalar__----------------------**",
            value: `
> **__Dual Beretta__** \`s!satın-al dual-beretta\` Fiyat: ** 1.500$**
> **__Desert Eagle__** \`s!satın-al desert-eagle\` Fiyat: ** 2.500$**
> **__Glock__** \`s!satın-al glock\` Fiyat: ** 1.000$**
            `, inline: false
          },
          {
            name: "**----------------------__Ağır Silahlar__----------------------**",
            value: `
> **__Nova__** \`s!satın-al nova\` Fiyat: ** 2.500$**
> **__Mag-7__** \`s!satın-al mag-7\` Fiyat: ** 1.550$**
            `, inline: false
          },
          {
            name: "**----------------------__Hafif makineli silahlar__----------------------**",
            value: `
> **__P90__** \`s!satın-al p90\` Fiyat: ** 3.000$**
> **__UMP-45__** \`s!satın-al ump-45\` Fiyat: ** 2.000$**
            `, inline: false
          },
          {
            name: "**----------------------__Tüfekler__----------------------**",
            value: `
> **__M4A4__** \`s!satın-al m4a4\` Fiyat: ** 5.950$**
> **__AK-47__** \`s!satın-al ak-47\` Fiyat: ** 10.000$**
> **__AWP__** \`s!satın-al awp\` Fiyat: ** 15.000$**
> **__SCAR-20__** \`s!satın-al scar-20\` Fiyat: ** 20.000$**
            `, inline: false
          },
          {
            name: "**----------------------__Bıçaklar__----------------------**",
            value: `
> **__Bayonet__** \`s!satın-al bayonet\` Fiyat: ** 5.000$**
> **__Karambit__** \`s!satın-al karambit\` Fiyat: ** 25.000$**
> **__Shadow Daggers__** \`s!satın-al shadow-daggers\` Fiyat: ** 9.000$**
> **__Butterfly__** \`s!satın-al butterfly\` Fiyat: ** 15.000$**
            `, inline: false
          },
        )
        message.channel.send(yardim)
        return;
  }
  if(args[0]=="cephane"){
        let yardim = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Cephane Market")//Texno Video <3 & Ceixsa <3
        .addField(`**----------------------__Cephane__----------------------**`,`
> **__Tabanca mermisi__**
\`s!satın-al tabanca-mermisi\` Fiyat: ** 100 $/tanesi**

> **__Ağır Silah mermisi__**
\`s!satın-al agir-silah-mermisi\` Fiyat: **150 /tanesi**

> **__Hafif makineli silah mermisi__**
\`s!satın-al hafif-makineli-silah-mermisi\` Fiyat: **50 $/tanesi**

> **__Tüfek mermisi__**
\`s!satın-al tufek-mermisi\` Fiyat: ** 500 $/tanesi**

`)
        message.channel.send(yardim)
        return;
  }
  if(args[0]=="arazi"){
        let yardim = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Cephane Market")//Texno Video <3 & Ceixsa <3
        .addField(`**----------------------__Araziler__----------------------**`,`
> **__Deniz manzaralı ev__**
\`s!satın-al arazi-1\` Fiyat: **200.000 $**
> **__Sığınak__**
\`s!satın-al arazi-2\` Fiyat: **300.000 $**
> **__Villa__**
\`s!satın-al arazi-3\` Fiyat: **500.000 $**
> **__Ada__**
\`s!satın-al arazi-4\` Fiyat: **1.000.000 $**
`)
        message.channel.send(yardim)
        return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["shop"],
  permLevel: 0
};

exports.help = {
  name: 'market',
  description: '',
  usage: 'market',
};
