const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const moment = require('moment');
const ms = require('ms')
console.log("BOT ONLINE");

const prefix = "$";
const token = process.env.BOT_TOKEN;
const owner = "``Mohamed | ~ ŘĹ ,Relax.!#2019``";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`${prefix}help | Bot ON ${client.guilds.size} Servers!`, `${prefix}help | Bot has ${client.users.size} Users!`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`           [Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`  Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('  Informations :')
  console.log('')
  console.log(`  servers! [ " ${client.guilds.size} " ]`);
  console.log(`  Users! [ " ${client.users.size} " ]`);
  console.log(`  channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════]╗')
  console.log('  Bot Is Online')
  console.log('╚[═════════════]╝')
  console.log('')
  console.log('')
});





//====================================================================
//command = help

client.on('message',async message => {
  if (message.content === prefix + "help") {
  message.channel.send(" تــــم ارســالك في الخــاص" )      
message.author.sendMessage(`
**
『GL ❱❱ System』 By: Mohamed | ~ ŘĹ ,Relax.!#2019
╔[❖════════════❖]╗
           Prefix = ' ${prefix} '
╚[❖════════════❖]╝

❖═══════════════════════════════════════════❖

╔[❖════════════❖]╗
                  Help
╚[❖════════════❖]╝

❖ ${prefix}help-public ➾ اوامر عامة
❖ ${prefix}help-admin ➾ اوامر للادرة
❖ ${prefix}help-games ➾ اوامر الاعاب

❖═══════════════════════════════════════════❖
『GL ❱❱ System』 created by :
╔[❖═══════════════════════❖]╗
  ${owner}
╚[❖═══════════════════════❖]╝
❖═══════════════════════════════════════════❖
**`);

 }
});




//====================================================================
//command = help-admin

client.on('message', message => {
  if (message.content === prefix + "help-admin") {
  message.channel.send(" تــــم ارســالك في الخــاص")
         
message.author.sendMessage(`
**
『GL ❱❱ System』 By: ${owner}
╔[❖════════════❖]╗
           Prefix = ' ${prefix} '
╚[❖════════════❖]╝


╔[❖════════════❖]╗
                  Admin
╚[❖════════════❖]╝

❖ ${prefix}ban ➾ اعطاء بان لشخص في السيرفر
❖ ${prefix}clear ➾ لحذف الشات
❖ ${prefix}kick ➾ طرد الشخص
❖ ${prefix}bc ➾ ترسل لكل اعضاء السيرفر
❖ ${prefix}hid ➾ لاخفاء الروم
❖ ${prefix}unhid ➾ لاظهار الروم
❖ ${prefix}قبول الشخص الي قدم ➾ قبول
❖ ${prefix}رفض الشخص الي قدم ➾ رفض
❖ ${prefix}giveaway ➾ صنع جيف اوي
❖ ${prefix}mute ➾ ميوت للشخص
❖ ${prefix}unmute ➾ فك الميوت عن الشخص
❖ ${prefix}unban ➾ فك الحظر عن الشخص
❖ ${prefix}role <role name> ➾ لأعطاء رتبة للاعضاء السيرفر
❖ ${prefix}roleremove <role name> ➾ لشيل الرتبة من اعضاء السيرفر
❖ ${prefix}Rainbow ➾ صنع رتبة ريمبو
❖ ${prefix}server ➾ معلومات عن السيرفر
❖ ${prefix}nickall <name> ➾ لاضافة شاعر سيرفرك لاسماء الاعضاء

❖═══════════════════════════════════════════❖
『GL ❱❱ System』 created by :
╔[❖═══════════════════════❖]╗
  ${owner}
╚[❖═══════════════════════❖]╝
❖═══════════════════════════════════════════❖
**`);

 }
});











//====================================================================
//command = ban

client.on('message', async message => {
 var moment = require('moment');
 var mmss = require('ms')
 let date = moment().format('Do MMMM YYYY , hh:mm');
 let User = message.mentions.users.first();
 let Reason = message.content.split(" ").slice(3).join(" ");
 let messageArray = message.content.split(" ");
 let time = messageArray[2];
 if(message.content.startsWith(prefix + "ban")) {
   if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**ماعندك برمشن :X:**");
    if(!User) message.channel.send("Mention Someone");
    if(User.id === client.user.id) return message.channel.send("** :X: ماتقدر تبند البوت**");
    if(User.id === message.guild.owner.id) return message.channel.send("** :X:لااستطيع تبنيد الاونر **");
    if(!time) return message.channel.send("**- اكتب الوقت**");
    if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('** :X: البوت لايدعم هذا الوقت**');
   if(!Reason) Reason = "Null";
    let banEmbed = new Discord.RichEmbed()
    .setAuthor(`New Banned User !`)
    .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
    .addField('- Banned By: ',message.author.tag,true)
    .addField('- Banned User:', `${User}`)
    .addField('- Reason:',Reason,true)
    .addField('- Time & Date:', `${message.createdAt}`)
    .addField('- Duration:',time,true)
    .setFooter(message.author.tag,message.author.avatarURL);
    let logchannel = message.guild.channels.find(`name`, "log");
if(!logchannel) return message.channel.send("Can't find log channel.");
incidentchannel.send(banEmbed);
message.channel.send(`**:white_check_mark: ${User} has been banned :airplane: **`).then(() => message.guild.member(User).ban({reason: Reason}))
User.send(`**:airplane: You are has been banned in ${message.guild.name} reason: ${Reason} by: ${message.author.tag} :airplane:**`)
    .then(() => { setTimeout(() => {
        message.guild.unban(User);
    }, mmss(time));
 });
}
});

//====================================================================
//command = allServers

client.on('message',  msg => {
if(msg.content.startsWith(prefix+'allservers')) {
 let output = '**Servers**\n';
 client.guilds.forEach(guild => {
   output += `**Name**: ${guild.name}, **ID**: ${guild.id}, **MembersCount**: ${guild.memberCount}, **Owner**: ${guild.owner}, **link**: https://discord.gg/${guild.code}`;
 });
 msg.channel.send(output);
}
});

//====================================================================
//bot joined on server / bot left form server

client.on('guildCreate', guild => {

client.user.get("454724311194927114").send(
 "\n" + "**" + " ● New Server : " + "**" +
 "\n" + "**" + "● Server :" + "**" +
 "\n" + "**" + "» " + guild.name + "**" +
 "\n" + "**" + " ● ID : " + "**" +
 "\n" + "**" + "» " + guild.id + "**" +
 "\n" + "**" + " ● Owner : " + "**" +
 "\n" + "**" + "» " + guild.owner + "**" +
 "\n" + "**" + " ● Member Count : " + "**" +
 "\n" + "**" + "» " + guild.memberCount + "**" +
 "\n" + "**" + " ● Bot Server Count : " + "**" +
 "\n" + "**" + "» " + client.guilds.size + "**" +
 "\n" + "**" + " ● Bot Users Count : " + "**" +
 "\n" + "**" + "» " + client.users.size + "**" +
 "\n" + "**" + " ● Server Roles : " + "**" +
 "\n" + "**" + "» " + guild.roles.size + "**" +
 "\n" + "**" + " ● Server Created At : " + "**" +
 "\n" + "**" + "» " + guild.createdAt.toLocaleString() + "**")

})

client.on('guildDelete', guild => {

client.user.get("454724311194927114").send(
 "\n" + "**" + " ● Left Server : " + "**" +
 "\n" + "**" + "● Server :" + "**" +
 "\n" + "**" + "» " + guild.name + "**" +
 "\n" + "**" + " ● ID : " + "**" +
 "\n" + "**" + "» " + guild.id + "**" +
 "\n" + "**" + " ● Owner : " + "**" +
 "\n" + "**" + "» " + guild.owner + "**" +
 "\n" + "**" + " ● Member Count : " + "**" +
 "\n" + "**" + "» " + guild.memberCount + "**" +
 "\n" + "**" + " ● Bot Server Count : " + "**" +
 "\n" + "**" + "» " + client.guilds.size + "**" +
 "\n" + "**" + " ● Bot Users Count : " + "**" +
 "\n" + "**" + "» " + client.users.size + "**" +
 "\n" + "**" + " ● Server Roles : " + "**" +
 "\n" + "**" + "» " + guild.roles.size + "**" +
 "\n" + "**" + " ● Server Created At : " + "**" +
 "\n" + "**" + "» " + guild.createdAt.toLocaleString() + "**")

});

//====================================================================
//command = allbc

client.on("message", message => {
if(message.author.bot) return;
 if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + 'allbc')){
if(!message.author.id === '454724311194927114') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

//====================================================================
//command = nickall


client.on("message", message => {
if(message.content.startsWith(prefix + "nickall")) {
   let args = message.content.split(" ").slice(1).join(" ");
   if(!message.member.hasPermission("MANAGE_NICKNAMES")) return;
       if(!args) {
           return;
       }
   message.channel.send(`**Changes applied on __${message.guild.memberCount}__ members.**`);
           message.guild.members.forEach(codes => {
               codes.setNickname(args + `  ${codes.user.username}`);
           }) 
}
});

//====================================================================
//command = mute

client.on('message', async message =>{
if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)
message.guild.channels.find("name","logs").send({embed : muteembed})
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`**     
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
====================================================
${message.author.tag} تمت معاقبتك بواسطة
====================================================
[ ${reason} ] : السبب
====================================================
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
**`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
user.send( muteembeddm);
}
if(command === `unmute`) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

let role = message.guild.roles.find (r => r.name === "Muted");

if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

await toMute.removeRole(role)
message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

return;

}

});




//====================================================================
//command = Hide

client.on('message', msg => {
if(msg.content === prefix + 'hide') {
 msg.guild.channels.forEach(c => {
   c.overwritePermissions(msg.guild.id, {
     SEND_MESSAGES: false,
     READ_MESSAGES: false
   })
 })
 msg.channel.send('**done!!**')
}
}) 

//====================================================================
//command = UnHide

client.on('message', msg => {
if(msg.content === prefix + 'unhide') {
 msg.guild.channels.forEach(c => {
   c.overwritePermissions(msg.guild.id, {
     SEND_MESSAGES: true,
     READ_MESSAGES: true
   })
 })
 msg.channel.send('**done!!**')
}
}) 

//====================================================================
//command = UnBan

client.on('message' , message => {
;
let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
if(message.content.startsWith(prefix + 'unban')) {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
   if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
   message.guild.unban(user);
   message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
   var embed = new Discord.RichEmbed()
   .setThumbnail(message.author.avatarURl)
   .setColor("RANDOM")
   .setTitle('**●Unban** !')
   .addField('**●User Unban :** ', `${user}` , true)
   .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
   .setAuthor(message.guild.name)
   message.channel.sendEmbed(embed)
}
});

//====================================================================
//command = clear

client.on("message", message => {
var args = message.content.substring(prefix.length).split(" ");
 if (message.content.startsWith(prefix+"clear")) {
   if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {

}
}}).then(msg => {msg.delete(3000)});
             }

});

//====================================================================
//command = setwlc

client.on("message", message => {
if(message.content.startsWith(prefix + "setwlc")) {
let args = message.mentions.channels.first();
   if(!args) message.channel.send("** منشن روم . ❌**").then(m => {    
m.delete(1500);
})
       if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . ❌**");
               message.channel.send(`**${args}. لقد تم تشغيل هاذا الروم للترحيب.**`);
           client.on("guildMemberAdd", (member) => {
                   if(member.user.bot) return;
                var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('New Member')
.setDescription('Welcome To Server')
.addField('**ID Member:',"" +  member.user.id, true)
.addField('**Tage Member:', member.user.discriminator, true)
.addField('Created At Member', member.user.createdAt, true)
.addField(' 👤  Your Number',`**[ ${member.guild.memberCount} ]**`,true)
.setColor('GREEN')
.setFooter(member.guild.name, member.guild.iconURL, true)
                
args.send({embed : embed});
           });
}
});

//====================================================================
//command = قبول

client.on('message', message => {
const mention = message.mentions.members.first();
const room = message.guild.channels.find("name","تقديمات")

if(message.content.startsWith(prefix + "قبول")) {

if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



room.send(`
**» العضو :** ${mention}
[ :white_check_mark: ] :: لقد تم قبول العضو `);

}

});

//====================================================================
//command = رفض

client.on('message', message => {
let mention = message.mentions.members.first();

let room = message.guild.channels.find("name","تقديمات")

if(message.content.startsWith(prefix + "رفض")) {

if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");

room.send(`
**» العضو :** ${mention}
[ :x: ] :: لقد تم رفض العضو`);

}

});

//====================================================================
//command = server

client.on('message', message => {
if(message.content.startsWith(prefix +"server")){ // الامر
 if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

//====================================================================
//command = role / roleremove

client.on("message", message => {
var args = message.content.split(' ').slice(1);
var msg = message.content.toLowerCase();
if( !message.guild ) return;
if( !msg.startsWith( prefix + 'role' ) ) return;
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
   if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
   if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
   var role = msg.split(' ').slice(2).join(" ").toLowerCase();
   var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
   if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
       message.mentions.members.first().removeRole( role1 );
       return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
   }
   if( args[0].toLowerCase() == "all" ){
       message.guild.members.forEach(m=>m.removeRole( role1 ))
       return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
   } else if( args[0].toLowerCase() == "bots" ){
       message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
       return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
   } else if( args[0].toLowerCase() == "humans" ){
       message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
       return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
   }  
} else {
   if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
   if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
   var role = msg.split(' ').slice(2).join(" ").toLowerCase();
   var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
   if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
       message.mentions.members.first().addRole( role1 );
       return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
   }
   if( args[0].toLowerCase() == "all" ){
       message.guild.members.forEach(m=>m.addRole( role1 ))
       return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
   } else if( args[0].toLowerCase() == "bots" ){
       message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
       return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
   } else if( args[0].toLowerCase() == "humans" ){
       message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
       return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
   }
}
});

//====================================================================
//command = bc


client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**```يجب عليك كتابة كلمة او جملة لإرسال البرودكاست```**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('برودكاست :mega: ')
.addField('السيرفر :white_check_mark: ', message.guild.name)
.addField('المرسل :sagittarius: ', message.author.username)
.addField('الرساله :envelope_with_arrow: ', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


//====================================================================
//command = Rainbow

client.on('message', message => {//new msg event
if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'Rainbow')) {//to create the rainbow role
   let role = message.guild.roles.find('name', 'Rainbow Rank')
   if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
 //start of create role 
 if(!role){
   rainbow =  message.guild.createRole({
  name: "Rainbow Rank",//the role will create name
  color: "#000000",//the default color
  permissions:[]//the permissions
//end of create role
})

}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})

client.on('ready', () => {//new ready event
 setInterval(function(){
     client.guilds.forEach(g => {
                 var role = g.roles.find('name', 'Rainbow Rank');//rainbow role name
                 if (role) {
                     role.edit({color : "RANDOM"});
                 };
     });
 }, 1500);//the rainbow time
})


//====================================================================
//command = kick

client.on('message',async message => {
 if (message.author.kick) return;
 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 if (command == "kick") {
              if(!message.channel.guild) return;
        
 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
 let user = message.mentions.users.first();
 let reason = message.content.split(" ").slice(2).join(" ");

 if (message.mentions.users.size < 1) return message.reply("منشن شخص");
 if(!reason) return message.reply ("اكتب سبب الطرد");
 if (!message.guild.member(user)
 .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

 message.guild.member(user).kick(7, user);

 const banembed = new Discord.RichEmbed()
 .setAuthor('Kicked !', user.displayAvatarURL)
 .setColor("RANDOM")
 .setTimestamp()
 .addField("User:",  `[ + ${user.tag} + ]`)
 .addField("By:", `[  + ${message.author.tag} +  ]`)
 .addField("Reason:", `[ + ${reason} +  ]`)
message.guild.channels.find("name","logs").send({embed : banembed})
}
});










//====================================================================
//command = closeroom / openroom

client.on('message', message => {
 if(message.content === prefix + "closeroom") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
        message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false

        }).then(() => {
            message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
        });
          }
if(message.content === prefix + "openroom") {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
        message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true

        }).then(() => {
            message.reply("**__تم فتح الشات__:white_check_mark:**")
        });
}
 
});


//====================================================================
//command = discord.gg

client.on('message', message => {
if(message.content.includes('discord.gg')){
                                  if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
if (!message.member.hasPermissions(['ADMINISTRATOR'])){
message.delete()
return message.reply(`** Not allowed to advertising Here :angry: ! **`)
}
}
});


//====================================================================
//command = help-public

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-public") {
   message.channel.send(" تــــم ارســالك في الخــاص")
          
message.author.sendMessage(`
**
『GL ❱❱ System』 By: ${owner}
╔[❖════════════❖]╗
            Prefix = ' ${prefix} '
╚[❖════════════❖]╝


╔[❖════════════❖]╗
                   Public
╚[❖════════════❖]╝

❖ ${prefix}bot ➾ معلومات عن البوت 
❖ ${prefix}new ➾ صنع تكت خاص فيك
❖ ${prefix}invite ➾ رابط اضافت البوت
❖ ${prefix}report ➾ لابلاغ عن شخص في السيرفر 
❖ ${prefix}e <message> ➾ رح يعملك يموجي بالشغلي الي انت كتبتا
❖ ${prefix}قرعة <number> ➾ سحب رقم الفائز
❖ ${prefix}id ➾ لكي تعرف معلوماتك
❖ ${prefix}email ➾ يجيب حساب و كلمة سر وهمين
❖ ${prefix}short <Link> ➾ اختصار رابط
❖ ${prefix}submit-seller ➾ تقديم على رتبة بائع
❖ ${prefix}submit-admin ➾ تقديم على رتبة ادارة

╔[❖════════════❖]╗
                   Other
╚[❖════════════❖]╝

لتفعيل امر : Report 
اعمل روم اسمه report
=======================
لتفعيل امر :
تقديم على ادارة او بائع 
اعمل روم اسمه :
تقديمات

==================================================================
『GL ❱❱ System』 created by :
╔[❖═══════════════════════❖]╗
   ${owner}
╚[❖═══════════════════════❖]╝
==================================================================
**`);

  }
});



//====================================================================
//command = e

const codes = {
  ' ': '   ',
  '0': '0⃣',
  '1': '1⃣',
  '2': '2⃣',
  '3': '3⃣',
  '4': '4⃣',
  '5': '5⃣',
  '6': '6⃣',
  '7': '7⃣',
  '8': '8⃣',
  '9': '9⃣',
  '!': '❕',
  '?': '❔',
  '#': '#⃣',
  '*': '*⃣'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async message => {
       if(message.content.startsWith(prefix + "e")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('**قم بكتابه الاسم بعد الامر بالانجليزي من فضلك**');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => codes[c] || c)
        .join('')
);
};
});

//====================================================================
//command = invite
client.on('message' , message => {
  if (message.content === prefix + "invite") {
      if(!message.channel.guild) return message.reply('This Command is Only For Servers');
   const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle('Click Here To Invite bot')
.setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958588585`)
message.channel.sendEmbed(embed);
 }
});






//====================================================================
//command = bot

client.on('message', message => {
  if (message.content.startsWith(prefix+"bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .setTitle('``INFO TK System`` ')
          .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
          .addField('``servers``', [client.guilds.size], true)
          .addField('``channels``' , `[ ${client.channels.size} ]` , true)
          .addField('``Users``' ,`[ ${client.users.size} ]` , true)
          .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
          .addField('``My ID``' , `[ ${client.user.id} ]` , true)
          .addField('``My Prefix``' , `[ ${prefix} ]` , true)
          .addField('``My Language``' , `[ Java Script ]` , true)
          .setFooter('By: GL Server ')
  })
}
});


//====================================================================
//command = قرعة

client.on('message', function(message) {
  if (message.author.bot) return;
    if(message.content.startsWith(prefix + 'قرعة')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});




//====================================================================
//command = Submit-Seller

client.on('message',async  Faisal => {
 
  if(Faisal.content.startsWith(prefix + "report")) {

    let lang = '';

    let time = '';

    let expe = '';

    let fillter = m => m.author.id === Faisal.author.id

    await Faisal.channel.send("شو اسم الشخص الي رح تبلغ علي ؟").then(e => {

      Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

   .then(co => {

     lang = co.first().content;

      co.first().delete();


     e.edit(`شو عمل هاد الشخص لتبلغ علي ؟؟
[${lang}]`)

Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(col => {

       time = col.first().content;

        col.first().delete();


          e.edit(`( عندك دليل على تبليغك ؟؟ ( رابط صورة
[${time}]
[${lang}]`)

Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

          .then(coll => {

            expe = coll.first().content;

             coll.first().delete();


             e.edit(`جاري تبليغ ...
[${expe}]
[${time}]
[${lang}]`)

            let Faisalyt = Faisal.guild.channels.find("name","report")
            setTimeout(() => {

              e.edit("تم التقديم")

            }, 3000)

            Faisalyt.send(`
» االاسم الشخص : **${lang}**
» سبب تبليغ : **${time}**
» دليل : **${expe}**
تم التبليغ بواسطة: ${Faisal.author}
`).then(Faisalyt => {

  Faisalyt.react(":white_check_mark: ")

  Faisalyt.react(":x:")

              })

          })

     })

   })

 })

  }

}); //By faisal

//====================================================================
//command = Submit-Seller

client.on('message',async  Faisal => {
 
  if(Faisal.content.startsWith(prefix + "submit-admin")) {

    let lang = '';

    let time = '';

    let expe = '';

    let fillter = m => m.author.id === Faisal.author.id

    await Faisal.channel.send("اسمك ؟").then(e => {

      Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

   .then(co => {

     lang = co.first().content;

      co.first().delete();


     e.edit(`عمرك ؟
[${lang}]`)

Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(col => {

       time = col.first().content;

        col.first().delete();


          e.edit(`شو رح تعمل اذا اخدت الرتبة ؟؟
[${time}]
[${lang}]`)

Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

          .then(coll => {

            expe = coll.first().content;

             coll.first().delete();


             e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)

            let Faisalyt = Faisal.guild.channels.find("name","تقديمات")
            var admin = "Admin Rank";
            setTimeout(() => {

              e.edit("تم التقديم")

            }, 3000)

            Faisalyt.send(`
» تقديم على رتبة :  **${admin}**
» االاسم : **${lang}**
» العمر : **${time}**
» شو رح يعمل اذا اخد الرتة : **${expe}**
تم التقديم بواسطة: ${Faisal.author}
`).then(Faisalyt => {

  Faisalyt.react(":white_check_mark: ")

  Faisalyt.react(":x:")

              })

          })

     })

   })

 })

  }

}); //By faisal

//====================================================================
//command = Submit-Seller

client.on('message',async  Faisal => {
 
  if(Faisal.content.startsWith(prefix + "submit-seller")) {

    let lang = '';

    let time = '';

    let expe = '';

    let fillter = m => m.author.id === Faisal.author.id

    await Faisal.channel.send("اسمك ؟").then(e => {

      Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

   .then(co => {

     lang = co.first().content;

      co.first().delete();


     e.edit(`عمرك ؟
[${lang}]`)

Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(col => {

       time = col.first().content;

        col.first().delete();


          e.edit(`ايش راح تبيع ؟
[${time}]
[${lang}]`)

Faisal.channel.awaitMessages(fillter, { time: 60000, max: 1 })

          .then(coll => {

            expe = coll.first().content;

             coll.first().delete();


             e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)

            let Faisalyt = Faisal.guild.channels.find("name","تقديمات")
            var seller = "Seller Rank";
            setTimeout(() => {

              e.edit("تم التقديم")

            }, 3000)

            Faisalyt.send(`
» تقديم على رتبة :  **${seller}**
» االاسم : **${lang}**
» العمر : **${time}**
» الي راح يبيعه : **${expe}**
تم التقديم بواسطة: ${Faisal.author}
`).then(Faisalyt => {

  Faisalyt.react(":white_check_mark: ")

  Faisalyt.react(":x:")

              })

          })

     })

   })

 })

  }

}); //By faisal



//====================================================================
//command = create fake email

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "email") {
function randomem() {
let email = '';
const n3k4a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.';
for (let i = 0; i < 5; i++) email += n3k4a.charAt(Math.floor(Math.random() * n3k4a.length));
return email
}
function randompass() {
let pass = '';
const Codes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.';
for (let i = 0; i < 8; i++) pass += Codes.charAt(Math.floor(Math.random() * Codes.length));
return pass;
}
const random1 = randomem();
const random2 = randompass();
message.author.send(`------------------------
email : **${random1}@gmail.com**
password : **${random2}**
------------------------`).catch(err => {
 if(err == "DiscordAPIError: Cannot send messages to this user") {
    return message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **");
}
});
message.channel.send("**تم الارسال الحساب في الخاص | ☑ **")
message.author.sendEmbed(embed).catch(error => message.reply('**خاصك مقفول**🔐'))
}
}); 




//====================================================================
//command = short

const shorten = require('isgd');
client.on('message', message => {

 if (message.content.startsWith(prefix + 'short')) {
    let args = message.content.split(" ").slice(1);
  if (!args[0]) return message.channel.send('**Usage**: '+ prefix +'short <رابط>')
  if (!args[1]) { 
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
      message.channel.send(`اختصار الرابط:  **<${res}>**`); 
    })
  } else { 
    shorten.custom(args[0], args[1], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`); 
      message.channel.send(`اختصار الرابط:**<${res}>**`); 
 })}}});







//====================================================================
//command = id
client.on('message', message => {
    if (message.content.startsWith(prefix + 'id')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**This Command Just In Servers**')
        message.guild.fetchInvites().then(invs => {
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id)
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0)
          var roles = message.member.roles.map(roles => `**__${roles.name}__ |**`).join(` `)
        let id = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(':clipboard: | User identity info')
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField('• Name :', message.author.username,true)
        .addField('• Tag :', message.author.discriminator,true)
        .addField('• ID :', message.author.id,true)
        .addField('• JoinedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• CreatedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• Total invites :', inviteCount,true)
        .addField('• Roles :', roles)
        .setTimestamp()
        message.channel.sendEmbed(id).then(c => {
            c.react('📋')
                })
            })
        }
    
        
});
  





//====================================================================

client.login(token);// don't change this
