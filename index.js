const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false,
  syncStatus: false
});

client.on('ready', () => {

  const richPresence = new Discord.RichPresence()
  .setApplicationId('123456789012345678')
  .setType('PLAYING') // PLAYING, STREAMING, LISTENING, WATCHING
  .setDetails('Hello world!')
  .setStartTimestamp(Date.now())
  .setName('Google Chrome')
  .setState('State')

  // set Large Image
  .setAssetsLargeImage('https://cdn.discordapp.com/attachments/901133191962837053/1021172060518617108/1663536768285.png')
  .setAssetsLargeText('Large Text')

  // set Small Image
  .setAssetsSmallImage('https://cdn.discordapp.com/attachments/901133191962837053/1021167114897342464/1663535585663.png')
  .setAssetsSmallText('Small Text')

  .addButton('Button 1', 'https://google.com')
  .addButton('Button 2', 'https://google.com')

  
  client.user.setActivity(richPresence);
  console.log(client.user.tag + ' Ready!');
});

client.login('user token');
