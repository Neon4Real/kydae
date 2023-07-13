const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `cmxn3on`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `cmxn3on`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `neonbot`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[kydae-web.averageneon.repl.co](kydae-web.averageneon.repl.co)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 