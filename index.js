const Discord = require('discord.js');
const config = require('./config.json');
const keepAlive = require('./server');

const token = process.env['TOKEN'];

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.author != client.user) {
    //    Mentions

    if (msg.mentions) {
      let ids = msg.mentions.users.map(({ id }) => id);
      if (ids.includes(config.mentions.aung_min_khant))
        await msg.channel.send(
          `<@${config.mentions.aung_min_khant}> ကိုကိုရေ ကိုကို့ကို ခေါ်နေတယ်ပါတယ်ရှင့်`
        );
      if (ids.includes(config.mentions.khant_zay_hlaing))
        await msg.channel.send(
          `<@${config.mentions.khant_zay_hlaing}> ခေါမီဆန်ပိုင် ${
            msg.author.id === config.mentions.aung_min_khant
              ? `ငါ့ကိုကို`
              : `ရေ နင့်အဘိုး`
          } ခေါ််နေတယ်.`
        );
      if (ids.includes(config.mentions.swan_htoon_thar))
        await msg.channel.send(
          msg.author.id === config.mentions.aung_min_khant
            ? `<@${config.mentions.swan_htoon_thar}> ခေါ်ရင်ထူးလေ နင်က ဆရာကြီးလား?`
            : `<@${config.mentions.swan_htoon_thar}> ခေါ်နေတယ်လို့ နားလေး?`
        );
      if (ids.includes(config.mentions.wai_phyo))
        await msg.channel.send(`<@${config.mentions.wai_phyo}> lol စော်ငြင်းကောင် နင့်ကို ခေါ်နေတယ်လေ.`);
      if (ids.includes(config.mentions.soe_htike))
        await msg.channel.send(
          msg.author.id === config.mentions.aung_min_khant
            ? `<@${config.mentions.soe_htike}> ခေါ်နေရင် ထူးကြပါလို့ ဆရာကြီး အထာတွေနဲ့`
            : `<@${config.mentions.soe_htike}> Haha. နင့်ဘိုးအေ ခေါ်နေတယ်. နားလေးနေတယ်ဆိုလည်း ပြောဦး ဆရာဝန်လေး ဘာလေး စောစောပြထားရအောင်လို့`
        );
      if (ids.includes(config.mentions.mee_bot))
        await msg.channel.send(`<@${config.mentions.mee_bot}> နင့်ကို ခေါ်နေတယ်လေ s fa bot.`)
      if (ids.includes(client.user.id)) {
        const keyword = msg.content.slice(22, msg.content.length).trim();
        if (msg.author.id === config.mentions.aung_min_khant) {
          if (config.greet.includes(keyword)) {
            await msg.reply(`hok kae ${keyword} koko <3`);
          } else {
            await msg.reply("br ll? m thi vu အာဘွားကွာ <33");
          }
        } else {
          if (config.greet.includes(keyword)) {
            await msg.reply(`Li ko ${keyword}?`);
          } else {
            await msg.reply("br ll hrr? gay ny?");
          }
        }
      }
      if (msg.author.id === config.mentions.mee_bot)
        await msg.reply("နင်ကို နေရာတကာ ပါလွန်းတယ်");
    }

    // Commands
  }
});

keepAlive();
client.login(token);
