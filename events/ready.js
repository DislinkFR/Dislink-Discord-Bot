const Discord = require("discord.js");

module.exports = (client) => {
  setInterval(function () {
    const axios = require("axios");
    axios.get("https://api.dislink.fr/links/clicks").then((response) => {
      client.channels.cache
        .get("860117869583925278")
        .messages.fetch("860236411197325342")
        .then((m) => {
          if (response.data[0].verified == "1") {
            var nom1 =
              "<:first:860652274610339861> • " +
              response.data[0].origin.toUpperCase() +
              " <a:verified:860645027701063690>";
          } else {
            var nom1 =
              "<:first:860652274610339861> • " +
              response.data[0].origin.toUpperCase();
          }
          if (response.data[1].verified == "1") {
            var nom2 =
              "<:second:860652273104322591> • " +
              response.data[1].origin.toUpperCase() +
              " <a:verified:860645027701063690>";
          } else {
            var nom2 =
              "<:second:860652273104322591> • " +
              response.data[1].origin.toUpperCase();
          }
          if (response.data[2].verified == "1") {
            var nom3 =
              "<:third:860652273222287380> • " +
              response.data[2].origin.toUpperCase() +
              " <a:verified:860645027701063690>";
          } else {
            var nom3 =
              "<:third:860652273222287380> • " +
              response.data[2].origin.toUpperCase();
          }
          let embed = new Discord.MessageEmbed()
            .setTitle(
              "<:dislink:860644193185169428> Top 3 des meilleurs liens <:dislink:860644193185169428>"
            )
            .addField('\u200b', '\u200b')
            .addField(
              nom1,
              "🧑‍🤝‍🧑 • Utilisations : " +
                response.data[0].view +
                "\n🔗 • Lien : [cliquer ici](" +
                response.data[0].url +
                ")"
            )
            .addField('\u200b', '\u200b')
            .addField(
              nom2,
              "🧑‍🤝‍🧑 • Utilisations : " +
                response.data[1].view +
                "\n🔗 • Lien : [cliquer ici](" +
                response.data[1].url +
                ")"
            )
            .addField('\u200b', '\u200b')
            .addField(
              nom3,
              "🧑‍🤝‍🧑 • Utilisations : " +
                response.data[2].view +
                "\n🔗 • Lien : [cliquer ici](" +
                response.data[2].url +
                ")"
            )
            .setThumbnail("https://cdn.staffe.net/OBdU6Rotyw.png")
            .setFooter("Dernière actualisation des données ")
            .setTimestamp();
          if (response.data[0].data.banner) {
            let bannerURL = response.data[0].data.banner.split("?");
            embed.setImage(bannerURL[0] + "?size=2048");
          }
          m.edit(embed);
        });
    });
  }, 1000);
};
