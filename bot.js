const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!';

client.on('ready', () =>{
    console.log('This bot is online.');
    client.user.setActivity(`RATP Discord`, { type: `WATCHING`}).catch(console.error);
})


// rules command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'rules':
            message.author.send(rules);
        break;
    }
})


// help command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'help':
            message.author.send(commands);
        break;
    }
})


// commands

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'commands':
            message.author.send(commands);
        break;
    }
})


// routes command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'routes':
            message.author.send(routes);
        break;
    }
})


// operators command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'operators':
            message.author.send(operators);
        break;
    }
})


// meeting command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'meeting':
            message.author.send(meeting);
        break;
    }
})


// all command replies

const rules = ("\n\n**Rules**\n**1.** No Racism\n**2.** No Spamming\n**3.** No begging for ranks\n**4.** No unecessary photos\n**5.** There are chat warnings, they can be given out by seniors and if you have 3 warnings you'll be kicked from the server.\n**6.** No Nudity or NSFW\n**7.** No Homophobic Language\n**8.** No Advertising other groups or games\n**9.** No asking for release dates, when we have a date it will be well publicised unless we don't wish for it to be.\n**10.** No tagging seniors unless for a reason of urgent nature.\n\n------------------------------------------------------------------------------------------------------------\n\n")

const routes = ("\n\n**London & East V3**\n**Routes**\n\n**58** Walthamstow Central to Leyton, Downsell Road \n**69** Walthamstow Central to Stratford\n**97** Chingford to Stratford City\n**158** Chingford Mount to Stratford\n**212** Chingford to St. James Street\n**215** Lea Valley Campsite to Walthamstow Central\n**257** Walthamstow Central to Stratford\n**357** Chingford Hatch to Whipps Cross (Hospital - Sundays only)\n**339** Leytonstone to Stratford City\n**W11** Chingford Hall Estate to Walthamstow Central\n**W15** Higham Hill, Cogan Avenue to Lea Interchange Bus Garage\n**W16** Chingford Mount to Leytonstone Station\n**W19** Walthamstow, Argall Avenue/St. James Street to Leytonstone Plaza\n**N26** Chingford Station/Walthamstow Central to Lea Interchange Bus Garage\n\n**Extensions possible after the release of the first part of the sim**\n\n------------------------------------------------------------------------------------------------------------\n\n")

const operators = ("\n\n**Meeting Place**\n\nRATP Dev London\nDaves Cafe\n\n**London & East V3**\n\nRATP Dev London\nDaves Cafe\n\n------------------------------------------------------------------------------------------------------------\n\n")

const commands = ("\n\n**Commands**\n\n**!help** or **!commands** - to view all available commands\n**!rules** - to view the group rules\n**!routes** - to view a full list of routes\n**!operators** - to view a full list of operators\n**!meeting** - view notes on what was said in the weekly meeting\n\n------------------------------------------------------------------------------------------------------------\n\n")

const meeting = ("\n\n**Weekly Meeting Notes**\n\niiReece98's Birthday Celebration\nMore Previews of London & East V3\nRATP Game Night may be coming up soon\n\n------------------------------------------------------------------------------------------------------------\n\n")





client.login(process.env.BOT_TOKEN);
