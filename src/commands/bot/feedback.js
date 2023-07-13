const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
  id: "1128678287921651732",
  token: "xSuyCW8NZc2ks64mpyjdYvyBgzc3IvNvDMiK39GjMGwPfNjYYfJJgz-w0259TpZqJP8B",
});

module.exports = async (client, interaction, args) => {
  const feedback = interaction.options.getString('feedback');

  const embed = new Discord.EmbedBuilder()
    .setTitle(`📝・New feedback!`)
    .addFields(
      { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
    )
    .setDescription(`${feedback}`)
    .setColor(client.config.colors.normal)
  webhookClient.send({
    username: 'Bot Feedback',
    embeds: [embed],
  });

  client.succNormal({
    text: `Feedback successfully sent to the developers`,
    type: 'editreply'
  }, interaction);
}

