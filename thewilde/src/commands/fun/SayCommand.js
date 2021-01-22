const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  async run(client, message, args) {
    const messageToSend = args.join(" ");
    const sendEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag} says: ${messageToSend}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setColor("#2E4057")
      .setTimestamp();
    try{
      await message.channel.send(sendEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send('Message send failed.');
    }
  }
}