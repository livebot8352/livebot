const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQxNTcxNjAzMjgzOTY4MDEx.Xy5gXw.4M4w6-vcFyMHZYEVpZhiSFRXgnE';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '라이브야') {
    return message.reply('왜');
  }

  if(message.content == '라이브야 사랑해') {
    return message.reply('ㅗ');
  }

  if(message.content == '라이브야 뭐해') {
    return message.reply('너생각');
  }

  if(message.content == '라이브야 모해') {
    return message.reply('너생각');
  }

  if(message.content == '라이브야 머해') {
    return message.reply('너생각');
  }

  if(message.content == '라이브야 안녕') {
    return message.reply('안녕못해');
  }

  if(message.content == '라이브야 안뇽') {
    return message.reply('안뇽못해');
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

client.login(token);