const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
  if(msg.content === 'هلا')
              setTimeout(function() {  
msg.reply('**هلا حبي**')
              }, 00)
});
 
 client.on('message', msg => {
  if(msg.content === 'السلام عليكم')
              setTimeout(function() {  
msg.reply('**وعليكم السلام ورحمه الله وبركاته**')
              }, 00)
});



client.login("NDg3NzI3MDY0MTkyMTIyODgw.DscrwQ.TZYt6JgUGlEcjPCDu-2EKs-r4zY");
