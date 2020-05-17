const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!';

client.on('ready', () =>{
    console.log('This bot is online.');
    client.user.setActivity(`!ratp for help`, { type: `WATCHING`}).catch(console.error);
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


// RATP (commands/help)

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'ratp':
            message.author.send(ratp);
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



// buses command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'buses':
            message.author.send(buses);
        break;
    }
})







// all command replies

const rules = ("\n\n**Rules**\n**1.** No Racism\n**2.** No Spamming\n**3.** No begging for ranks\n**4.** No unecessary photos\n**5.** There are chat warnings, they can be given out by seniors and if you have 3 warnings you'll be kicked from the server.\n**6.** No Nudity or NSFW\n**7.** No Homophobic Language\n**8.** No Advertising other groups or games\n**9.** No asking for release dates, when we have a date it will be well publicised unless we don't wish for it to be.\n**10.** No tagging seniors unless for a reason of urgent nature.\n\n------------------------------------------------------------------------------------------------------------\n\n")

const routes = ("\n\n**London & East V3**\n**Routes**\n\n**58** Walthamstow Central to Wanstead Park \n**69** Walthamstow Central to Stratford\n**97** Chingford to Stratford City [FULL ROUTE]\n**158** Chingford Mount to Stratford [FULL ROUTE]\n**212** Chingford to St. James Street [FULL ROUTE]\n**215** Lea Valley Campsite to Walthamstow Central [FULL ROUTE]\n**257** Walthamstow Central to Stratford [FULL ROUTE]\n**357** Chingford Hatch to Whipps Cross (Hospital - Sundays only) [FULL ROUTE]\n**339** Leytonstone to Stratford City\n**W11** Chingford Hall Estate to Walthamstow Central [FULL ROUTE]\n**W15** Higham Hill, Cogan Avenue to Lea Interchange Bus Garage\n**W16** Chingford Mount to Leytonstone Station [FULL ROUTE]\n**W19** Walthamstow, Argall Avenue/St. James Street to Leytonstone Plaza\n**N26** Chingford Station/Walthamstow Central to Lea Interchange Bus Garage\n\n**Extensions possible after the release of the first part of the sim**\n\n------------------------------------------------------------------------------------------------------------\n\n")

const operators = ("\n\n**Meeting Place**\n\nRATP Dev London\nDaves Cafe\n\n**London & East V3**\n\nRATP Dev London\nDaves Cafe\n\n------------------------------------------------------------------------------------------------------------\n\n")

const ratp = ("\n\n\n**RATP Helper**\n\n**!ratp** - to view all available commands\n**!rules** - to view the group rules\n**!routes** - to view a full list of routes\n**!operators** - to view a full list of operators\n**!meeting** - to view notes on what was said in the weekly meeting\n**!buses** - to view the full RATP Fleet\n\n------------------------------------------------------------------------------------------------------------\n\n")

const meeting = ("\n\n**Weekly Meeting Notes**\n\niiReece98's Birthday Celebration\nMore Previews of London & East V3\nRATP Game Night may be coming up soon\n\n------------------------------------------------------------------------------------------------------------\n\n")

const buses = ("\n\n**RATP Dev London Fleet**\n\nTo be added when reece sends them.\n\n------------------------------------------------------------------------------------------------------------\n\n")



client.login(process.env.BOT_TOKEN);
