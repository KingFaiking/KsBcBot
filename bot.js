const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>'

client.on('ready', () => {
  console.log(`bcbot I'm ready with ${client.user.tag}!`);
});



  client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`${prefix}b | KingsServerBc `,` ${prefix}bc | KingsServerBc `];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/idk`);
    }, ms);1000

});


 


client.login(process.env.BOT_TOKEN);
