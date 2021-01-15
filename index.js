require('dotenv').config()
const {Client} = require('discord.js')
const bot  = new Client()

bot.on('ready',()=>{
    console.log(`${bot.user.tag} has logged in`)
})

bot.on('message',(msg)=>{
    msg.reply('this is a reply')
    .then(()=>{
        console.log('message has been sent')
    })
    .catch(err => console.log(err))
})

bot.login(process.env.discord_token)

