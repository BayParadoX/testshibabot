const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("EN ABSÜRT ÖLÜM YÜKLENİYOR :").then(message => {

    var Electron = [


        "Uzaya gidersin ama gök taşı mekiğe çarptığı için mekik param parça oldu ve nefessizlikten öldün",
        "Teröristler kaçırıp kafana 10 adet şarjör boşalttılar",
        "120 katlı gökdelene çıkıp poz verirken ayağın kaydı ve düşerken ucu sivri demire saplandın ve öldün",
        "Düğünde ateş edilen silahın 1 mermisi tam beynine girer ve ölürsün",
        "Pikniğe gittiğin bir ormanda çalı çırpı toplarken ayı saldırdı ve parçalanarak öldün",
        "İşten evine dönerken kafana uçak düştü ve yok oldun",
        "Çay yaparken ocak patladı ve havaya uçarak yüzün yandı ama ölmedin götürüldüğün hastanede yüzünü düzeltirken doktor yanlış yeri kesti ve can kaybı verdin",
        "Bilim adamı oldun ve ışınlanma silahı icat ettin fakat yanlış koordinat girdin portal silahı ve sen yanar dağın içinde eridiniz.",
        "Öksürürken bir anda bütün organların fırladı ve içi boş bir ceset oldun",
        "Denizde yüzerken bir anda megaladon seni yer ve ölürsün",
        "2 tır arasında kalırsın kağıt gibi incelirsin ve ölürsün",
        "Gittiğin markette bomba patlatıldı ve öldün",
        "Testislerin 2 tonluk press makinasına sıkıştı can çekiştiğin için acıdan öldün",
        "Şeytan üçgeninde gizemli bir şekilde öldün",
        "Korku filminde en korkunç sahnede kalpten gittin",
        "Farklı bir boyutta bir yaratık tarafından vahşice katledildin",
        "UFO gören masum köylülerden biri oldun ve seni kaçırıp deney yaptılar cesedini uzay boşluğunda uçuruyorlar şuan",
        "İnşaat alanında ebelemece oynarken ayağın takılıp gözünü paslı çiviye batırırsın ve kan kaybından ölürsün",
        "Yanlışıkla asfalt makinasına girdin ve atomlarına ayrıldın ama en azından şuan asfaltsın.",
        "Asit ile dolu bir varilden örnek almaya çalışırken ayağın kayıyor ve yanarak ölüyorsun",
        "Kira sana el sallıyor ama görüşürüz anlamında (anlayan anladı :D)",
        "Twitterde aptallığın yüzünden ırkçı paylaşım yaptın ve 6 zenci evine doğru yol aldı önce yapçak sonra öldürcekler :D",
        "Mutlu bir şekilde kahvaltı yapmak için mutfağa gidip fırına patates sürdün çıkardığında o kadar sıcaktıki yerken patates boğazında kaldı hem nefessizlikten hemde yanıktan öldün",
        "Çok hızlı dönen pervaneye elini sokarsın ve elin parçalanır ve kan kaybından ve acıdan ölürsün",
        "Belediyenin kazdığı çukuru gece farketmeyip içine düşmen sonucu sabaha kadar farelerin kemirmesiyle ölmek",
        "Para çekmek amacıyla girilen bankamatik gişesinde elektirik çarpması sonucu ölüm",
        "Hayvanat Bahçesine gittiğinde filin üzerine sıçması sonucu boğularak can verdin",
        "kes lan fetöcü",
        "Yayaya yanan kırmızı ışığı görmeyip karşıdan karşıya geçerken hızla gelen arabanın çarpıp 5-6 metre havaya uçarak yere çakılman sonucu ölüm",
        "Tıraş olurken berber rahatlatır diye boynunu aniden sağa sola çevirme hareketi sonucu küt diye boyun kırılması sonucu nalları diktin",
        "Kahvede okey oynarken kafana inek düşmesi sonucu ölüm",
        "Dışarıdan eve gelip salona geçerken ucu sivri olan avize yukardan delip aşağıdan çıkması sonucu ölüm",
        "Yoldan geçen araba trafik levhasına çarptı levha uçarak sana saplandı ve heykel gibi öldün",
        "Denizde yüzerken iki ayağınada kramp girer ve boğularak ölürsün",
        "Su zannedip içtiğin şeyin içinde güçlü asit vardı (her boku içersen bok yoluna gidersin işte)",
        "Biri seni gıdıklarken çok fazla güldüğün için öldün",
        "İnşaatta çalışırken bıçaklar ile gırtlağının kesilip kafanın kopması sonucu ölüm",
        "Sen ecelinle öleceksin merak etme :)",
        "Midene kaçan sineği öldürmek için ağzına böcek ilacı sıkarak zehirlendin",
        "Ormanda hayatta kalmaya çalışırken yırtıcı hayvanlardan korunmak için evinin etrafına dec kazıklar çektin sonra tepedeyken ayağın kayıp kalbin kazığa saplandı ve akbabalar tarafından kemirildin"

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
  name: "absürt-ölüm",
  description: "garip ölümler",
  usage: "absürt-ölüm"
};
