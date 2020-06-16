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


// RATP (commands/help)

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'ratphelp':
            message.author.send(ratphelp);
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


// FAQ command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'faq':
            message.author.send(faq);
        break;
    }
})



// Credits command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'credits':
            message.author.send(credits);
        break;
    }
})


// Staff command

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'staff':
            message.author.send(staff);
        break;
    }
})




// ping

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");
  
    switch(args[0]) {
        case 'testping':

        var facts = [":ping_pong: Pong! took **121ms**", ":ping_pong: Pong! took **125ms**", ":ping_pong: Pong! took **124ms**", ":ping_pong: Pong! took **129ms**", ":ping_pong: Pong! took **118ms**"];
        var fact = Math.floor(Math.random() * facts.length);  

          const pingembed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Ping :ping_pong:')
          .addField('Ping', (facts[fact]));

          message.channel.send(pingembed)

        break;

    }
  })






// all command replies

const rules = ("\n\n**Rules**\n**1.** No Racism\n**2.** No Spamming\n**3.** No begging for ranks\n**4.** No unecessary photos\n**5.** There are chat warnings, they can be given out by seniors and if you have 3 warnings you'll be kicked from the server.\n**6.** No Nudity or NSFW\n**7.** No Homophobic Language\n**8.** No Advertising other groups or games\n**9.** No asking for release dates, when we have a date it will be well publicised unless we don't wish for it to be.\n**10.** No tagging seniors unless for a reason of urgent nature.\n\n------------------------------------------------------------------------------------------------------------\n\n")

const routes = ("\n\n**London & East V3**\n**Routes**\n\n**58** Walthamstow Central to Wanstead Park \n**69** Walthamstow Central to Stratford\n**97** Chingford to Stratford City [FULL ROUTE]\n**158** Chingford Mount to Stratford [FULL ROUTE]\n**212** Chingford to St. James Street [FULL ROUTE]\n**215** Lea Valley Campsite to Walthamstow Central [FULL ROUTE]\n**257** Walthamstow Central to Stratford [FULL ROUTE]\n**357** Chingford Hatch to Whipps Cross (Hospital - Sundays only) [FULL ROUTE]\n**339** Leytonstone to Stratford City\n**W11** Chingford Hall Estate to Walthamstow Central [FULL ROUTE]\n**W15** Higham Hill, Cogan Avenue to Lea Interchange Bus Garage\n**W16** Chingford Mount to Leytonstone Station [FULL ROUTE]\n**W19** Walthamstow, Argall Avenue/St. James Street to Leytonstone Plaza\n**N26** Chingford Station/Walthamstow Central to Lea Interchange Bus Garage\n\n**Extensions possible after the release of the first part of the sim**\n\n------------------------------------------------------------------------------------------------------------\n\n")

const operators = ("\n\n**London & East V3**\n\n**RATP Dev London**\nDiscord: https://discord.gg/4CaCKa2\nGroup Link: https://www.roblox.com/groups/5841116/RATP-Dev-London#!/about\n\n**First Travel**\nDiscord: https://discord.gg/CdTh54d\nGroup Link: https://www.roblox.com/groups/696923/First-Travel#!/about\n\n**Sullivan Buses**\nDiscord: https://discord.gg/pFwxJHm\nGroup Link: https://www.roblox.com/groups/4033033/Sullivanbuses#!/about\n\n**SunRise Coffee**\nDiscord: https://discord.gg/PMRz96u\nGroup Link: https://www.roblox.com/groups/1058031/SunRise-Coffee#!/about\n\n**Greggs**\nDiscord: https://discord.gg/d9sYd98\nGroup Link: https://www.roblox.com/groups/2722089/Greggs#!/about\n\n------------------------------------------------------------------------------------------------------------\n\n")

const ratphelp = ("\n\n\n**RATP Helper**\n\n**!ratphelp** - to view all available commands\n**!rules** - to view the group rules\n**!routes** - to view a full list of routes\n**!operators** - to view a full list of operators\n**!meeting** - to view notes on what was said in the weekly meeting\n**!buses** - to view the full RATP Fleet\n**!faq** - to view frequently asked questions\n**!credits** - to view a full list of game credits\n**!staff** - to view a full list of the HRs, Seniors & Execs\n\n------------------------------------------------------------------------------------------------------------\n\n")

const meeting = ("\n\n**Weekly Meeting Notes**\n\nTo be uploaded soon...\n\n**Next Meeting:** TBC\n**Time:** TBC\n\n------------------------------------------------------------------------------------------------------------\n\n")

const buses = ("\n\n**RATP Dev London Fleet**\n\nTo be announced soon...\n\n------------------------------------------------------------------------------------------------------------\n\n")

const faq = ("\n\n**Frequently Asked Questions**\n\n**Can I be a HR?**\nCurrently, HR applications are not open, when they do open, they will be advertised in the #applications channel.\n\n**When is the next meeting?**\nMeetings are advertised on our Group Shout and Discord server.\n\n------------------------------------------------------------------------------------------------------------\n\n")

const credits =("\n\n**Development Credits**\n\n**CalumT01** - Lea Interchange, Stratford Bus Station, Walthamstow Bus Station, Map Scenery\n**BrickBusEllis** - Map Scenery\n**senyo44ALT2** - Map Roads\n**eesa222** - Westfield Scenery, Leyton Garage, Bakers Arms\n**MrTomasboy** - Scripting\n**Mike_7668** - Scripting\n**iiCentrebus** - Route Directions, Bus Stops\n**x3fklazomaniac** - Blender\n**iiReece98** - Project Manager\n**GreekAviator_RBX** - GUIs\n**railwork** - Bus Building\n**redline_1999** - Bus Building\n\n------------------------------------------------------------------------------------------------------------\n\n")

const staff = ("\n\n**RATP Staff**\n\n**HRs**\nLukasRichwood\nreecerod\nBrickBusEllis\nAlexDev_exe\nZainabdriver\nmxtiple\nBrettYork\namazingguy377\nDD_Sim\nRebelkopGamer206\nPhotoBlockTrollz\niiDight3r\nFletchyboy100\njojojosh3210\nmax8gaming\nBritishAviator_RBX\nCaidanParker\nTowerGateway\nOptical365\nthemister18\nKacperEpic\nJ_oshJ\nredline_1999\nConnorClever\nx3fklazomaniac\nMike_7668\n\n**Seniors**\nsenyo44ALT2\n\n**Execs**\nCalumT01 *- Executive Assistant*\neesa222 *- Executive Assistant*\nMrTomasboy *- Chief Executive Officer*\niiReece98 *- Chairman*")


// UserInfo Command

const bot = new Discord.Client({disableEveryone: true});

client.on("message", async message => {
	
	
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	let com = command.toLowerCase();
    var sender = message.author;

if(com === `${PREFIX}ui`) {
    
        let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	let ment = message.mentions.users.first();
		if(!ment) {
			message.channel.send('Please mention a user!')
		}
	
		const embed = new Discord.MessageEmbed()
		.addField("Discord Username", ment.tag)
		.addField("UserID", ment.id)
		.addField("Current Status", ment.presence.status)
                .addField("Account Created", ment.createdAt)
                .addField("RATP Server Join Date", rMember.joinedAt)
                .setThumbnail(ment.avatarURL)
		message.channel.send(embed)
	
		return console.log(`> userinfo command used by ${message.author.username}`);
	}
})











client.login(process.env.BOT_TOKEN);
