const Discord = require('discord.js');
const config = require('./config.json');
const rand = require('./random');
// const keepAlive = require('./server');

// const token = process.env['TOKEN'];
const token = 'ODYyMjk4OTE3NzQzNDkzMTIx.YOWUcg.4_3N1yBoEbwVImZbtRTuvyVnyYM';

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.author != client.user) {
    //    Mentions

    if (msg.mentions) {
      let ids = msg.mentions.users.map(({ id }) => id);
      if (ids.includes(config.mentions.jayden))
        await msg.channel.send(
          `<@${config.mentions.jayden}> ${
            config.mentions.reply.jayden[
              rand(config.mentions.reply.jayden.length)
            ]
          }`
        );
      if (ids.includes(client.user.id)) {
        const keyword = msg.content.slice(22, msg.content.length).trim();

        if (msg.author.id === config.mentions.jayden) {
          await msg.reply(
            `${
              config.greet.reply.jayden[rand(config.greet.reply.jayden.length)]
            } ${config.greet.words.includes(keyword) ? keyword : ''}`
          );
        } else {
          if (config.greet.words.includes(keyword)) {
            await msg.reply(
              `${
                config.greet.reply.others[
                  rand(config.greet.reply.others.length)
                ]
              } li ko ${keyword}?`
            );
          } else {
            await msg.reply(
              config.mentions.reply.others[
                rand(config.mentions.reply.others.length)
              ]
            );
          }
        }
      }
    }

    // Commands
  }
});

// keepAlive();
client.login(token);
