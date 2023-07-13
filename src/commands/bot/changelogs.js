const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Latest Update Info",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📃┆Changelogs",
                value: '07/12/2023 - Updated the bot to the latest version of discord.js (v14) light weight framework,bugs fixed.',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 