const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")

exports.run = async (client, message, args) => {
    switch(args[0]){
      default:
            let yardim = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Market")
            .setImage("https://cdn.discordapp.com/attachments/819556022125330482/822478341038145556/standard.gif")
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
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "ferrari":
            if(db.fetch(`para_${message.author.id}`) < 80000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Ferrari: 80000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -80000)
            db.add(`ferrari_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Ferrari arabasını aldınız.\nEnvanterinizde toplamda ${db.fetch(`ferrari_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "porche":
            if(db.fetch(`para_${message.author.id}`) < 75000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Porche: 75000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -75000)
            db.add(`porche_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Porche arabasını aldınız.\nEnvanterinizde toplamda ${db.fetch(`porche_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "mercedes":
            if(db.fetch(`para_${message.author.id}`) < 40000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Mercedes: 40000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -40000)
            db.add(`mercedes_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Mercedes arabasını aldınız.\nEnvanterinizde toplamda ${db.fetch(`mercedes_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "audi":
            if(db.fetch(`para_${message.author.id}`) < 50000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Audi: 50000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -50000)
            db.add(`audi_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Audi arabasını aldınız.\nEnvanterinizde toplamda ${db.fetch(`audi_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "bmw":
            if(db.fetch(`para_${message.author.id}`) < 40000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Bmw: 40000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -40000)
            db.add(`bmw_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde BMW arabasını aldınız.\nEnvanterinizde toplamda ${db.fetch(`bmw_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "lamborghini":
            if(db.fetch(`para_${message.author.id}`) < 75000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Lamborghini: 75000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -75000)
            db.add(`lamborghini_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Lamborghini arabasını aldınız.\nEnvanterinizde toplamda ${db.fetch(`lamborghini_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "Şahin":
      case "Şahin":
      case "sahin":
            if(db.fetch(`para_${message.author.id}`) < 25000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Şahin: 25000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -25000)
            db.add(`sahin_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Şahin arabasını aldınız.\nEnvanterinizde toplamda ${db.fetch(`sahin_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "desert-eagle":
      case "deserteagle":
            if(db.fetch(`para_${message.author.id}`) < 2500){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Desert Eagle: 2500 $")
                return;
            }
            db.add(`para_${message.author.id}`, -2500)
            db.add(`deserteagle_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Desert Eagle silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`deserteagle_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "dualberetta":
      case "dual-beretta":
            if(db.fetch(`para_${message.author.id}`) < 1500){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Dual Beretta: 1500 $")
                return;
            }
            db.add(`para_${message.author.id}`, -1500)
            db.add(`dualberetta_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Dual Beretta silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`dualberetta_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "glock":
            if(db.fetch(`para_${message.author.id}`) < 1000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Glock : 1000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -1000)
            db.add(`glock_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Glock silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`glock_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "nova":
            if(db.fetch(`para_${message.author.id}`) < 2500){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Nova : 2500 $")
                return;
            }
            db.add(`para_${message.author.id}`, -2500)
            db.add(`nova_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Nova silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`nova_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "mag-7":
      case "mag7":
            if(db.fetch(`para_${message.author.id}`) < 1550){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Mag-7 : 1550 $")
                return;
            }
            db.add(`para_${message.author.id}`, -1550)
            db.add(`mag7_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Mag-7 silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`mag7_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "p90":
            if(db.fetch(`para_${message.author.id}`) < 3000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.P90 : 3000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -3000)
            db.add(`p90_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde P90 silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`p90_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "ump-45":
      case "ump45":
            if(db.fetch(`para_${message.author.id}`) < 2000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.UMP-45 : 2000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -2000)
            db.add(`ump45_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde UMP-45 silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`ump45_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "m4a4":
            if(db.fetch(`para_${message.author.id}`) < 5950){
                message.channel.send("Malesef bunu alman için paran yetmiyor.M4A4 : 5950 $")
                return;
            }
            db.add(`para_${message.author.id}`, -5950)
            db.add(`m4a4_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde M4A4 silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`m4a4_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "awp":
            if(db.fetch(`para_${message.author.id}`) < 15000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.AWP : 15000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -15000)
            db.add(`awp_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde AWP silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`awp_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "ak47":
      case "ak-47":
            if(db.fetch(`para_${message.author.id}`) < 10000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.AK-47 : 10000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -10000)
            db.add(`ak47_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde AK-47 silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`ak47_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "scar-20":
      case "scar20":
            if(db.fetch(`para_${message.author.id}`) < 20000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.SCAR-20 : 20000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -20000)
            db.add(`scar20_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde SCAR-20 silahını aldınız.\nEnvanterinizde toplamda ${db.fetch(`scar20_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "bayonet":
            if(db.fetch(`para_${message.author.id}`) < 5000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Bayonet : 5000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -5000)
            db.add(`bayonet_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Bayonet bıçağını aldınız.\nEnvanterinizde toplamda ${db.fetch(`bayonet_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "karambit":
            if(db.fetch(`para_${message.author.id}`) < 25000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Karambit : 25000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -25000)
            db.add(`karambit_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Karambit bıçağını aldınız.\nEnvanterinizde toplamda ${db.fetch(`karambit_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "kelebek":
      case "butterfly":
            if(db.fetch(`para_${message.author.id}`) < 15000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Kelebek : 15000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -15000)
            db.add(`butterfly_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Kelebek bıçağını aldınız.\nEnvanterinizde toplamda ${db.fetch(`butterfly_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "shadowdaggers":
      case "shadow-daggers":
            if(db.fetch(`para_${message.author.id}`) < 9000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Shadow Daggers : 9000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -9000)
            db.add(`shadowdaggers_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Shadow Daggers bıçağını aldınız.\nEnvanterinizde toplamda ${db.fetch(`shadowdaggers_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "tabancamermisi":
      case "tabanca-mermisi":
            if(!args[1]) return message.channel.send("Kaç mermi alacağını belirt!");
            if(isNaN(args[1])) return message.channel.send("Kaç mermi alacağını belirt!");
            if(db.fetch(`para_${message.author.id}`) < (args[1]*100)){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Tabanca Mermisi : 100 $,Toplam fiyat : "+(args[1]*100))
                return;
            }
            db.add(`para_${message.author.id}`, -(args[1]*100))
            db.add(`tabancamermisi_${message.author.id}`, +args[1])
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde ${args[1]} tane Tabanca Mermisi satın aldınız.\nEnvanterinizde toplamda ${db.fetch(`tabancamermisi_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "agirsilahmermisi":
      case "agir-silah-mermisi":
            if(!args[1]) return message.channel.send("Kaç mermi alacağını belirt!");
            if(isNaN(args[1])) return message.channel.send("Kaç mermi alacağını belirt!");
            if(db.fetch(`para_${message.author.id}`) < (args[1]*150)){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Ağır Silah Mermisi : 150 $,Toplam fiyat : "+(args[1]*150))
                return;
            }
            db.add(`para_${message.author.id}`, -(args[1]*150))
            db.add(`agirsilahmermisi_${message.author.id}`, +args[1])
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde ${args[1]} tane Ağır Silah Mermisi satın aldınız.\nEnvanterinizde toplamda ${db.fetch(`agirsilahmermisi_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "hafifmakinelisilahmermisi":
      case "hafif-makineli-silah-mermisi":
            if(!args[1]) return message.channel.send("Kaç mermi alacağını belirt!");
            if(isNaN(args[1])) return message.channel.send("Kaç mermi alacağını belirt!");
            if(db.fetch(`para_${message.author.id}`) < (args[1]*50)){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Hafif Makineli Silah Mermisi : 50 $,Toplam fiyat : "+(args[1]*50))
                return;
            }
            db.add(`para_${message.author.id}`, -(args[1]*50))
            db.add(`hafifmakinelisilahmermisi_${message.author.id}`, +args[1])
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde ${args[1]} tane Ağır Silah Mermisi satın aldınız.\nEnvanterinizde toplamda ${db.fetch(`hafifmakinelisilahmermisi_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "tufekmermisi":
      case "tufek-mermisi":
            if(!args[1]) return message.channel.send("Kaç mermi alacağını belirt!");
            if(isNaN(args[1])) return message.channel.send("Kaç mermi alacağını belirt!");
            if(db.fetch(`para_${message.author.id}`) < (args[1]*500)){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Tüfek Mermisi : 500 $,Toplam fiyat : "+(args[1]*500))
                return;
            }
            db.add(`para_${message.author.id}`, -(args[1]*500))
            db.add(`tufekmermisi_${message.author.id}`, +args[1])
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde ${args[1]} tane Ağır Silah Mermisi satın aldınız.\nEnvanterinizde toplamda ${db.fetch(`tufekmermisi_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "arazi1":
      case "arazi-1":
            if(db.fetch(`para_${message.author.id}`) < 200000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Deniz Manzaralı Ev : 200.000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -200000)
            db.add(`denizev_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Deniz Manzaralı Ev satın aldınız.\nEnvanterinizde toplamda ${db.fetch(`denizev_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "arazi2":
      case "arazi-2":
            if(db.fetch(`para_${message.author.id}`) < 300000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Sığınak : 300.000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -300000)
            db.add(`siginakev_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Sığınak satın aldınız.\nEnvanterinizde toplamda ${db.fetch(`siginakev_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "arazi3":
      case "arazi-3":
            if(db.fetch(`para_${message.author.id}`) < 500000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Villa : 500.000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -500000)
            db.add(`villaev_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Sığınak satın aldınız.\nEnvanterinizde toplamda ${db.fetch(`villaev_${message.author.id}`)} tane oldu`))
            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "arazi4":
      case "arazi-4":
            if(db.fetch(`para_${message.author.id}`) < 1000000){
                message.channel.send("Malesef bunu alman için paran yetmiyor.Ada : 1000.000 $")
                return;
            }
            db.add(`para_${message.author.id}`, -1000000)
            db.add(`ada_${message.author.id}`, +1)
            await message.channel.send(new Discord.MessageEmbed().setDescription(`Tebrikler! Başarılı şekilde Ada satın aldınız.\nEnvanterinizde toplamda ${db.fetch(`ada_${message.author.id}`)} tane oldu`))
            break;
    }
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["buy","satin-al","satınal","satın-al"],
  permLevel: 0
};

exports.help = {
  name: 'satinal',
  description: 'hesap',
  usage: 'satinal'
};
