require('dotenv').config()
const {Client} = require('discord.js')
const Discord = require('discord.js')
const bot  = new Client()
const axios = require('axios')
bot.on('ready',()=>{
    console.log(`${bot.user.tag} has logged in`)
})

bot.on('message',(msg)=>{
    if(!msg.author.bot){
        message_content = msg.content
        const [command,arg] = message_content.split(' ') 
        
        if(command === '!search'){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${arg}&key=${process.env.google_api_key}`)
        .then(res =>{
            const books = res.data.items
            if(books ===[]){
                msg.reply(`No ${arg} books has been found`)
            }
            books.forEach(book => {
                msg.reply(`${book.volumeInfo.title}:${book.selfLink}`)
            });
        })
        .catch(err =>{
            console.log(err)
        })
        } 
    }
})

bot.login(process.env.discord_token)

