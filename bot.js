const Discord = require("discord.js")
const config = require("./config")

const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

bot.login(config.token)

bot.on("ready", async () => {
    console.log(`${bot.user.tag} est connecté !`)
})
